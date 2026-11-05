# Java CI/CD Deployment Project

## Overview
A Spring Boot web application demonstrating an automated CI/CD pipeline using GitHub Actions, Maven, Docker, Kubernetes, and Ansible.

## Technology Stack
- Java 21 – Application development
- Spring Boot – Backend framework
- Maven – Build and testing
- JUnit 5 – Unit testing
- Git & GitHub – Version control
- GitHub Actions – CI/CD automation
- Docker – Containerization
- Docker Hub – Container registry
- Kubernetes (K3s) – Container orchestration
- Ansible – Configuration management
- Microsoft Azure – Cloud deployment

## CI/CD Pipeline
1. Developer pushes code to GitHub.
2. GitHub Actions checks out the source code.
3. Maven builds the application and runs tests.
4. The JAR artifact is uploaded and transferred to the Docker job.
5. Docker builds the application image.
6. The image is pushed to Docker Hub.
7. The deployment workflow applies Kubernetes manifests to the cloud cluster.

## Kubernetes
The `k8s/` directory contains:
- `deployment.yaml` – Application deployment configuration.
- `service.yaml` – NodePort service configuration.

## Ansible
The `ansible/` directory contains:
- `playbook.yml` – Installs and configures K3s.
- `inventory.ini` – Defines the cloud server.
- `ansible.cfg` – Ansible configuration.

## Application Endpoints
- `/` – Application dashboard
- `/health` – Health check endpoint

## Docker Image
`minijay1/javacicd-app:latest`

## Deployment Status
Cloud deployment and public endpoint configuration will be completed on Azure.
