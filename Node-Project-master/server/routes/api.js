const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Donator = require('../models/donator');
const Ngo=require('../models/ngo');
//const Medicine = require('../models/medicine');

const db = "mongodb://vaibhavgupta98:vaibhav98@ds133556.mlab.com:33556/hhdb";
mongoose.Promise= global.Promise;

mongoose.connect(db,function(err){
    if(!err){
        console.log('Database connected successfully');
    }
    else{
        console.log("Error in connecting  db..."+err);
    }
});

router.get('/', function(req, res){
    res.send('api works');
});



//   post request for Donator's SIgn up form
router.post('/saveDonator',function(req,res){


    //console.log(req.body);

    var newDonator = new Donator();

    newDonator.firstName = req.body.firstName;
    newDonator.lastName = req.body.lastName;
    newDonator.email = req.body.email;
    newDonator.address = req.body.address;
    newDonator.contact = req.body.contact;
    newDonator.uname = req.body.uname;
    newDonator.password = req.body.password;

    newDonator.save(function(err, insertedDonator){
        if(err){
            console.log(err);
        }else{
            console.log("Donator data saved successfully")
            res.json(insertedDonator);
        }
    });

    //res.status(200).send({"Message":" donator data received"})
})



//   post request for Ngo's SIgn up form
router.post('/saveNgo',function(req,res){


    //console.log(req.body);

    var newNgo = new Ngo();

    
    newNgo.organsationName = req.body.organsationName;
    newNgo.email = req.body.email;
    newNgo.address = req.body.address;
    newNgo.contact = req.body.contact;
    newNgo.uname = req.body.uname;
    newNgo.password = req.body.password;

    newNgo.save(function(err, insertedNgo){
        if(err){
            console.log(err);
        }else{
            console.log("Ngo data saved successfully")
            res.json(insertedNgo);
        }
    });

    //res.status(200).send({"Message":" ngo data received"})
})


module.exports = router;