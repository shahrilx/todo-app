pipeline {
  agent any
  stages {
    stage('clone repo') {
      steps {
        git(url: 'git@github.com:shahrilx/todo-app.git', branch: 'main')
      }
    }

  }
}