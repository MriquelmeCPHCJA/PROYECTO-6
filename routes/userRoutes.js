const express = require('express');
const { 
    createUser ,
    loginUser,
    verifyUser, 
    updateUserById  
} = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.post('/register', createUser); // localhost:3001/api/users/create-user

userRoutes.post('/login', loginUser); // localhost:3001/api/users/login

userRoutes.get('/verify-user', auth, verifyUser); // localhost:3001/api/users/verify-user

userRoutes.put('/update-user/:id', updateUserById); // localhost:3001/api/users/update-user/:id

module.exports = userRoutes;