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

4. **Kubernetes Deployment**:
   - Created Kubernetes YAML files for frontend, backend, and MySQL with Persistent Volumes and Persistent Volume Claims for MySQL data.
   - Deployed the application on the Kubernetes cluster.

5. **Ingress Setup**:
   - Used Nginx Ingress Controller to expose the Angular frontend.

6. **Git Operations**:
   - All Kubernetes YAML files are pushed to this repository using Git CLI
![Screenshot from 2025-02-04 11-38-47](https://github.com/user-attachments/assets/a06320ca-53f7-4c45-98da-3396659c5685)
![Screenshot from 2025-02-03 09-28-40](https://github.com/user-attachments/assets/001fcb3f-8076-4f65-934a-2498687ae5cc)
![Screenshot from 2025-02-03 09-31-45](https://github.com/user-attachments/assets/ff97827d-8d04-4798-89e8-5426aaa1a64f)
![Screenshot from 2025-02-01 08-15-33](https://github.com/user-attachments/assets/9490a7aa-9302-48e3-b91b-4a7a95d5300a)
![Screenshot from 2025-02-01 08-15-06](https://github.com/user-attachments/assets/3cfca895-62d5-4b5a-89f6-6e89c1765be0)

