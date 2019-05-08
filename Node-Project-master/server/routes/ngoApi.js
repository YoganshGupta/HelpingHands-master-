const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Ngo = require('../models/ngo');
//const Medicine = require('../models/medicine');




router.get('/', function(req, res){
    res.send('ngo api works');
});



// function to receive ngo login username& password and checking in db and returning ngo's username 
router.post('/authenticateNgo',function(req,res){

    console.log("Inside server function")
    console.log(JSON.stringify(req.body))

    Ngo.findOne({uname: req.body.username, password: req.body.password },function(err,ngoDetails){
        if(err){
            console.log("error finding user")
        }
        else{
            if(ngoDetails == null){
                res.status(400).send();
                
            }
            console.log(ngoDetails);
            res.send(ngoDetails);
        }
    })
    
})









module.exports = router;