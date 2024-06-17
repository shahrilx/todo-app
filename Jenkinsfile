pipeline {
  agent any
  stages {
    stage('clone repo') {
      steps {
        git(url: 'git@github.com:shahrilx/todo-app.git', branch: 'main')
      }
    }

    stage('build') {
      steps {
        sh 'docker.build("todo-app:${env.BUILD_ID}")'
      }
    }

    stage('test') {
      steps {
        echo 'Test complete'
      }
    }

    stage('push') {
      steps {
        sh '''sh \'docker-compose down\'
'''
      }
    }

    stage('deploy') {
      steps {
        sh 'sh \'docker-compose up -d --build\''
      }
    }

  }
}