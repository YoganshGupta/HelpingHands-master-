const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Miscellaneous = require('../models/miscellaneous');







router.get('/', function(req, res){
    res.send('miscellaneous api works');
});



// function 
router.post('/saveMiscellaneous',function(req,res){

    console.log("Inside server save Miscellaneous function")
    console.log(JSON.stringify(req.body))

    var newMiscellaneous = new Miscellaneous();
    newMiscellaneous.donorFirstName = req.body.donorFirstName
    newMiscellaneous.donorLastName = req.body.donorLastName
    newMiscellaneous.donorEmail = req.body.donorEmail
    newMiscellaneous.donorAddress = req.body.donorAddress
    newMiscellaneous.donorContact = req.body.donorContact   
    newMiscellaneous.donorUname = req.body.donorUname
    newMiscellaneous.itemName = req.body.itemName
    newMiscellaneous.quantity = req.body.quantity
    newMiscellaneous.description = req.body.description

    newMiscellaneous.save(function(err, insertedMiscellaneous){
        if(err){
            console.log(err);
        }else{
            console.log("Miscellaneous data saved successfully")
            res.json(insertedMiscellaneous);
        }
    });

    
})


router.get('/getMiscellaneous',function(req,res){
    Miscellaneous.find({},function(err,MiscellaneousDetails){
        if(err){
            console.log('error finding miscellaneous');
        }
        else{
            console.log('Miscellaneous Details fetched');
            res.json(MiscellaneousDetails);
        }
    })
})









module.exports = router;