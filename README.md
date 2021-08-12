# Sadbox NodeJs App

Nodwjs sample application to be deployed with CodePipeline using ECS bluie/green deployment


## Config files

- Dockerfile : for CodeBuild
- appspec.yml : Manifest file used by AWS Code deploy
- buildspec.yml : Manifest file used to trigger code build
- task.json : for ECS Task Definitions in deployment

## Environment variables examples of AWS Codebuild
```
SERVICE_PORT        20000
IMAGE_REPO_NAME     coda-nodejs-app
AWS_ACCOUNT_ID      111111111111
AWS_DEFAULT_REGION  us-east-1
IMAGE_TAG           latest
MEMORY_RESV         100
```
