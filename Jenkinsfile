pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/shahrilx/todo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("todo-app:${env.BUILD_ID}")
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d --build'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh 'docker system prune -f'
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
