<h1 align="center">
Startkicker
</h1>
<p align="center">
Scope: A platform where user can browse different projects that others build and back the project. Users can also start a project and seek supports.
</p>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>
<p align="center">
  
   <a href="https://github.com/amazingshellyyy/startkicker/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
  
</p>
> MERN is a fullstack implementation in MongoDB, Expressjs, React, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.


# Main technology and Apis
  1. MERN stack
  2. AWS SES(simple email service)
  3. Stripe payment API

# Installation
  1. Install Node.js:
  Make sure you have Node.js installed as it's required to run a Node.js server and use npm (Node Package Manager).

  2. Install MongoDB:
  As the project uses MongoDB, ensure you have MongoDB installed and running on your machine or use a MongoDB cloud service.

  3. Set up environment variables:
  You may need to set up environment variables such as database connection strings, API keys for AWS SES, Stripe, and any other services the application uses.

  4. Install dependencies:
  `cd backend`
  `npm install`
  `cd frontend`
  `npm install`

  5. Example frontend .env file:  
    `REACT_APP_API_URL="http://localhost:8080/api/v1"  
    NODE_ENV="dev"`  
  Example backend .env file:  
    `STRIPE_KEY=""  
    JWT_SECRET="a"  
    NODE_ENV="dev"  
    MONGODB_URI="mongodb://localhost:27017"`  


# User Story
As a general User:
- User can log in and signup for an account via normal way 
- User will receive welcome email when sign up
- User can see featured project on the landing page 
- User can click the project and be direct to a project detail page and see more information about the project
- User can back the project by choosing the amount they would like to pay via stripe
- User can see the project they create and back in their dashboard

As a project starter:
- User can start a project by fill in project details such as the name of the project, location, verifying personal identity, set up a bank account, project details, and photos
- User will receive payment from supporters and start the project. User will deliver the project by either shipping to supporters or achieve the project

# Milestones
  1. User login/Signup Auth with JWT token
  2. Project CRUD
  3. Plam CRUD
  4. Email welcome email to new signup user
  5. User Payment with stripe 

# Screenshots of this project

Landing Page

![Screen Shot 2020-03-13 at 7 54 30 AM](https://i.imgur.com/K0Caf1i.png)

User DashBoard

![Screen Shot 2020-03-13 at 7 54 21 AM](https://i.imgur.com/OhN3TRn.png)

Project Detail Page

![Screen Shot 2020-03-13 at 7 51 54 AM](https://i.imgur.com/sAAJl4R.png)

Create a project
![createproject](https://i.imgur.com/8Iv3m0G.png)

Create plans for project
![Screen Shot 2020-03-13 at 7 52 12 AM](https://i.imgur.com/dFdvIFh.png)

Deleting Modal
![Landing](https://i.imgur.com/rWUCslj.png)


