const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    phone: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
})



const User = mongoose.model('USER', userSchema);
module.exports = User;