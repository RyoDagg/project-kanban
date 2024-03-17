# Project kanDo

## Introduction

Welcome to our Project Manager Website! In today's fast-paced world, effective project management is more important than ever. Whether you're a freelancer, a small business owner, or part of a large organization, staying organized and managing tasks efficiently is key to success.
Our Project Manager Website is designed to streamline your workflow and empower you to achieve your project goals with ease. With a user-friendly interface and powerful features, we provide the tools you need to plan, track, and collaborate on projects effectively.

## Setup

I have created files & commands to generate (synchronize and populate/seed the database).

1. create database under the name **kanban** or change the database name in **server\config**.
2. Access **/server**.

```bash
>_ cd /server
```

3. Synchronize database using:

```bash
>_ npm run sync:db
```

4. Seed database using:

```bash
>_ npm run seed:db
```

##

## User Stories

- Users can create account in the platform
- Users can CRUD projects 
- Users can search and add members to the project 
- Users can add and delete tasks 
- Users can organize tasks with (ToDo,Doing,Done)


## Technologies Used

# Front-end
- React
- Tailwind & bootstrap
- react router dom
- axios

# Back-end
- express
- mysql
- bcrypt
- express-fileupload
- jsonwebtoken
- Sequelize
- path

### User can LogIn
 ![alt text](<img/Capture d’écran 2024-03-17 203652.png>)
### User can SignUp
 ![alt text](<img/Capture d’écran 2024-03-17 203741.png>)
### Home (projects view) 
![alt text](<img/Capture d’écran 2024-03-17 204057.png>)
### User can manipulate with tasks
![alt text](<img/Capture d’écran 2024-03-17 204215.png>)
![alt text](<img/Capture d’écran (1).png>)
### User can add members in the project
![alt text](<img/Capture d’écran 2024-03-17 204657.png>)
 
## Conclusion

Thank you for considering our Project KanDo for your project management needs. We're committed to continuously improving our platform to provide you with the best possible experience. Whether you're a seasoned project manager or just getting started, we're here to support you every step of the way.

Sign up now and discover how our Project KanDo can help you take control of your projects and unleash your full potential. Let's make project management simpler, smarter, and more successful together!
