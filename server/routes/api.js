const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//MongoDB Credentials//
const db = "mongodb+srv://ornob:BWiJ7YxlQn7THbRp@cluster0.pbofs.mongodb.net/eventsdb?retryWrites=true&w=majority";

//Connection to MongoDB
mongoose.connect(db, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connection Successful')
    }
})

//API Test
router.get('/', function(req, res) {
    res.send('From API Route')
})


// User Registration API//
router.post('/register', (req, res) => {
        let userData = req.body;
        let user = new User(userData);
        user.save((error, registeredUser) => {
            if (error) {
                console.log(error);
            } else {
                let payload = { subject: registeredUser._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({ token })
            }
        })
    })
    //


// User Login API//
router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(404).send('Invalid email')
            } else
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({ token })
            }

        }
    })
})

//
module.exports = router;
