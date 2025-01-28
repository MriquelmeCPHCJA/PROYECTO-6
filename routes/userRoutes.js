const express = require('express');
const { 
    createUser ,
    loginUser,
    verifyUser, 
    updateUserById  
} = require('../controllers/UserController');

const auth = require('../middleware/authorization');

const userRoutes = express.Router();

userRoutes.post('/register', createUser); // localhost:3000/api/users/register

userRoutes.post('/login', loginUser); // localhost:3000/api/users/login

userRoutes.get('/verify-user', auth, verifyUser); // localhost:3000/api/users/verify-user

userRoutes.put('/update-user/:id', updateUserById); // localhost:3000/api/users/update-user/:id

module.exports = userRoutes;