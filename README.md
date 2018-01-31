# playground
Different  "playing around" types of projects that I wanted to be able to start from the same basic configurations

## Current
This branch will be used for developing Lambda functions for AWS

Specifically I'm trying to use the serverless utility to deploy the code.  I was having some weird issues with
packaging so I switched back to gulp for building and zipping (packaging) but then used serverless to deploy.

## Tutorial
https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/
NOTE: Source has been moved to ./src and you can use the "gulp build" command to compile
      The serverless.yml is pointing to ./dist/handler.js which is where the build outputs to.

https://www.npmjs.com/package/serverless
## Documentation
http://docs.serverless.com

## command to run in offline mode.
- This command runs the offline server and can be run in a separate terminal window
serverless offline start

- point your browser to 
http://localhost:3000/hello

## configure access 
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
NOTE: get the access key and secret key from the AWS console under your account | Manage Security Credentials

## command to deploy to AWS
serverless deploy


## Dev-Dependencies
typescript tslint
gulp gulp-typescript gulp-tslint
serverless-offline serverless-gulp
?serverless-plugin-typescript
NOTE: I'm not sure about serverless-plugin-typescript yet.  I think if that may be needed for serverless to compile the typescript before deployment

## Dependencies

## Global Dependencies
typescript - npm install typescript -g
serverless - npm install serverless -g
