
pipeline {
    agent any

    tools {
        maven 'Maven-3.9'
    }

    environment {
        IMAGE_NAME = 'minijay1/javacicd-app'
        IMAGE_TAG = 'multistage'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
                junit 'target/surefire-reports/*.xml'
            }
        }

        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }

        stage('Docker Multi-Stage Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('Docker Image Size') {
            steps {
                sh '''
                    echo "Docker Image Information:"
                    docker images ${IMAGE_NAME}:${IMAGE_TAG}

                    echo "Image Size:"
                    docker image inspect ${IMAGE_NAME}:${IMAGE_TAG} \
                    --format='{{.Size}}' | \
                    awk '{printf "%.2f MB\\n", $1/1024/1024}'
                '''
            }
        }
    }

    post {
        success {
            echo 'Multi-stage Jenkins pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
