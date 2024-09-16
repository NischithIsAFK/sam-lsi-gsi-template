# Creating indexes using AWS SAM
### Introduction
This is the template for creating a GSI and LSI using AWS SAM. AWS SAM is an framework for building serverless applications.

### Flow of events
In the template.yaml-
* Used Paramaters so we can change the values when we deploy the SAM application
* Created a Lambda function with Dynamo DB Read only access to restrict the lambda to only read the data
* A Dynamo DB template where table name, Attribute definitions are mentioned.
* Added a LSI
* Once this is done deploy the application using `sam deploy --guided`
* Now the SAM template is uploaded and resources such as lambda and dynamo db is created using CloudFormation
* Now if you remove the LSI template in template.yaml and deploy, it gives out an error. We have to create new table or delete the table and deploy again 
* GSI can be added after table creation and can be deleted too.
