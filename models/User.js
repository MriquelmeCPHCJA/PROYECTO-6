const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: function(){return this.isNew},
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: function(){return this.isNew},
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: function(){return this.isNew},
        trim: true
    },
    nameUser: [ {
        type: String,
        required: function(){return this.isNew},
        trim: true
    }, 
    {
        type: String,
        required: function(){return this.isNew},
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
        required: function(){return this.isNew},
    }, 
    { 
        type: Number 
    }]
}, { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;