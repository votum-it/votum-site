pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nexus.k8s.corp.polygran.de/votum/votum-site-dev:latest'
        HELM_CHART_PATH = './helm/votum-site'
        VALUES_FILE = './helm/votum-site/values-dev.yaml'
        NAMESPACE = 'votum-dev'
        DEPLOYMENT_NAME = 'votum-site-votum-site-dev'
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
                    docker.build(env.DOCKER_IMAGE, '.')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://nexus.k8s.corp.polygran.de', 'nexus-credentials') {
                        docker.image(env.DOCKER_IMAGE).push()
                    }
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