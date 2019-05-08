const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const ngoSchema=  new Schema({
    organisationName: String,
    email: String,
    address: String,
    contact: String,
    uname: {
        type: String,
        unique: true
    },
    password: String
})

module.exports = mongooose.model('ngomodel',ngoSchema,'ngo_details');