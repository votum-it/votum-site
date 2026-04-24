@Library('jenkins-shared-library')_

pipeline {
    agent any

    environment {
        NEXUS_URL = 'nexus.k8s.corp.polygran.de/votum/'
        IMAGE_NAME = 'votum-site-dev'
        IMAGE_TAGS = "latest,${env.BUILD_NUMBER}"
        HELM_CHART_PATH = './helm/votum-site'
        VALUES_FILE = './helm/votum-site/values-dev.yaml'
        NAMESPACE = 'votum-dev'
        DEPLOYMENT_NAME = 'votum-site-votum-site-dev'
        NEXUS_CREDENTIALS_ID = 'nexus-credentials'

    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.buildImage(
                        imageName: IMAGE_NAME,
                        imageTags: IMAGE_TAGS.tokenize(",")
                    )
                }
            }
        }

         stage('Push Docker Image to Nexus') {
            steps {
                script {
                    def result = docker.pushDockerImageToNexus(
                        nexusUrl: NEXUS_URL,
                        imageName: IMAGE_NAME,
                        imageTags: IMAGE_TAGS.tokenize(","),
                        nexusCredentialsId: NEXUS_CREDENTIALS_ID
                    )
                    echo "Image pushed: ${result.imageName} with tags: ${result.imageTags}"
                }
            }
    }

        stage('Deploy with Helm') {
            steps {
                script {
                    sh "helm upgrade --install votum-site ${env.HELM_CHART_PATH} -f ${env.VALUES_FILE} --namespace ${env.NAMESPACE}"
                }
            }
        }

        stage('Restart Deployment') {
            steps {
                script {
                    sh "kubectl rollout restart deployment ${env.DEPLOYMENT_NAME} -n ${env.NAMESPACE}"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}