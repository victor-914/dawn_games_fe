pipeline {
  agent none

  environment {
    GITHUB_USER = "victor-914"
    APP_NAME    = "dawngames-fe"
    RELEASE     = "1.0.0"
    REGISTRY    = "ghcr.io"
    IMAGE_NAME  = "${REGISTRY}/${GITHUB_USER}/${APP_NAME}"
    IMAGE_TAG   = "${RELEASE}-${BUILD_NUMBER}"
  }

  stages {

    stage("Build & Push with Kaniko") {
      agent {
        kubernetes {
          yamlFile 'kaniko-builder.yaml'
        }
      }

      steps {
        checkout scm

        container('kaniko') {
          sh '''
            /kaniko/executor \
              --dockerfile=Dockerfile \
              --context=. \
              --destination=${IMAGE_NAME}:${IMAGE_TAG}
          '''
        }
      }
    }
  }
}