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
    nameUser:  {
        firstname: {
            type: String,
            required: function(){return this.isNew},
            trim: true
        },
        lastname: {
            type: String,
            required: function(){return this.isNew},
            trim: true
        }
    },
    addressUser: { 
        street1: { 
            type: String 
        } ,
        street2:{ 
            type: String 
        } , 
        state:{ 
            type: String 
        } , 
        city: { 
            type: String 
        } , 
        zip:{ 
            type: String 
        }
    },
    phoneUser: {
        phone1:{ 
            type: Number
        }, 
        phone2:{ 
        type: Number 
        }
    }
},
{timestamps: true}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;