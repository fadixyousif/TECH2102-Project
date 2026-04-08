pipeline {
    agent any
    environment{
        AWS_DOCKER_REGISTRY = '913529219453.dkr.ecr.us-east-1.amazonaws.com'
        APP_NAME = 'tech2102-project'
        AWS_DEFAULT_REGION = 'us-east-2'
        DOCKER_API_VERSION = '1.44'
    }

    stages {

        stage('Build') {
            agent {
                docker {
                    image 'node:24.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:24.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f dist/index.html
                    npm test
                '''
            }
        }

        stage('Build My Docker Image'){
            agent{
                docker{
                    image 'amazon/aws-cli'
                    reuseNode true
                    args '-u root -v /var/run/docker.sock:/var/run/docker.sock --entrypoint=""'
                }
            }
            steps{
                withCredentials([usernamePassword(credentialsId: 'TECH2102-Project', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'AWS_ACCESS_KEY_ID')]) 
                {

                    sh '''
                        dnf install -y docker
                        docker build -t $AWS_DOCKER_REGISTRY/$APP_NAME .
                        docker images

                        aws ecr get-login-password | docker login --username AWS --password-stdin $AWS_DOCKER_REGISTRY
                        docker push $AWS_DOCKER_REGISTRY/$APP_NAME:latest
                    '''
                }
            }
        }
    }
}