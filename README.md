# paymentProcessing

Testing the ScalaAPI

Requirements
============
--Node
--NPM
--pm2


Step1: 

Install pm2 globally
=====================
$ npm install pm2 -g

Step2: 

Clone the Repository/download .zip file

Step3:

Download the dependencies
==========================
cd paymentProcessing
npm install

Step4:

To Run the App Locally
======================

"pm2-runtime start ecosystem.config.js --env local"


Step5:
Accessing the WebApp
=====================
Please proceed the below URL in your browser
http://localhost:3000/webApp

Step6:
Accessing the API(POSTMAN)
=====================

http://localhost:3000/v1/configurations
http://localhost:3000/v1/orders

Step7:
Run testcases(JEST)
=====================
npm test

Step8:
Code(JEST)
=====================
npx jest --coverage

