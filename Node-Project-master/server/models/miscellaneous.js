const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const misSchema=  new Schema({
    donorFirstName: String,
    donorLastName: String,
    donorEmail: String,
    donorAddress: String,
    donorContact: String,
    donorUname: String,
    itemName: String,
    quantity: String,
    description: String
})
module.exports = mongooose.model('mismodel',misSchema,'mis_details');