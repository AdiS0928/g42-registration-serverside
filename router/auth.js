const express = require('express');
const router = express.Router();

const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../db/conn');
const User = require("../model/userSchema");




//register route

router.post('/register', async (req, res) => {

    const { name, email, phone, company, position, message } = req.body;

    if(!name || !email || !phone || !company || !position)
    {
        return res.status(422).json({ error: "Please fill all the fields properly" });
    } 

    try {
        //if email is already register before
        

        const user = new User({name, email, phone, company, position, message});

        //hashing

        await user.save();

        res.status(201).json({ message:"User Successfully Registered!" })

    } catch(err) {
        console.log(err);
    }

});



module.exports = router;