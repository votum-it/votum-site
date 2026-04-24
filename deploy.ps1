# PowerShell script for deployment

# Pull latest changes from git
git pull

# Build Docker image (first build)
docker build -t nexus.k8s.corp.polygran.de/votum/votum-site-dev:latest .

# Push to nexus registry
docker push nexus.k8s.corp.polygran.de/votum/votum-site-dev:latest

# Upgrade or install Helm chart
helm upgrade --install votum-site ./helm/votum-site -f ./helm/votum-site/values-dev.yaml -n votum-dev

# Restart the deployment to apply changes
kubectl rollout restart deployment votum-site-votum-site-dev -n votum-dev  