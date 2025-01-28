const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    nameUser: [ {
        type: String,
        required: true,
        trim: true
    }, 
    {
        type: String,
        required: true,
        trim: true
    }],
    addressUser: [ { 
        type: String 
    } ,
    { 
        type: String 
    } , 
    { 
        type: String 
    } , 
    { 
        type: String 
    } , 
    { 
        type: String 
    } ],
    phoneUser: [{ 
        type: Number, 
        required: true
    }, 
    { 
        type: Number 
    }]
}, { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;