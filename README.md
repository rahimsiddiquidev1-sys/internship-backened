# Role-Based User Authentication & JWT Microservice

Yeh ek simple authentication backend hai jo Node.js, Express aur MongoDB use karke bani hai.  
Isme user register/login kar sakta hai, JWT token milta hai, aur role ke hisaab se routes access hote hain.

Main yeh project internship ke Task 1 ke liye bana raha hoon.

---

## Features

- User register aur login
- Password bcrypt se hash hota hai, plain text save nahi hota
- JWT token generate hota hai login pe
- Protected routes — bina token ke access nahi
- Role based access (user / admin)
- Admin ke liye alag dashboard route
- CORS enabled hai frontend ke liye

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---

## Folder Structure
