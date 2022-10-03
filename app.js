const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

dotenv.config({path: './config.env' });

require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json()); 

//linking router files to make routing easy
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {    
    console.log(`The Server is running on port ${PORT}`);
})
