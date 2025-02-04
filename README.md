# depi-angular-app
# Kubernetes Deployment for 3-Tier Angular App

This repository contains the deployment setup for a 3-tier Angular application (Frontend, Backend, MySQL) on Kubernetes.

## Steps Followed:
1. **Cluster Setup**:
   - Installed Kubernetes cluster using `kubeadm` with 1 master and 1 worker node.
   - Removed master node taint to allow scheduling pods on it.

2. **Code Setup**:
   - Cloned the repository: [depi-angular-app](https://github.com/marwansss/depi-angular-app).

3. **Docker Setup**:
   - Created Dockerfiles for both the frontend (multi-stage) and backend.
   - Created a `docker-compose.yml` to group the application.
   - Pushed Docker images to a Docker registry.

4. **Private Docker Registry** (Bonus):
   - Set up a private Docker registry using [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-22-04).

5. **Kubernetes Deployment**:
   - Created Kubernetes YAML files for frontend, backend, and MySQL with Persistent Volumes and Persistent Volume Claims for MySQL data.
   - Deployed the application on the Kubernetes cluster.

6. **Ingress Setup**:
   - Used Nginx Ingress Controller to expose the Angular frontend.

7. **Git Operations**:
   - All Kubernetes YAML files are pushed to this repository using Git CLI
