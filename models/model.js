const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        maxlength: 32
    },
    whatsappNo: {
        type: String,
        maxlength: 13,
        minlength: 10
    },
    email: {
        type: String,
        maxlength: 32
    },
    officeAddress: {
        type: String,
        maxlength: 52
    }
});



const vendorSchema = new Schema({
    name: {
        type: String,
        maxlength: 32
    },
    contact: {
        type: String,
        maxlength: 13,
        minlength: 10
    },
    whatsappNo: {
        type: String,
        maxlength: 13,
        minlength: 10
    },
    alternativeNo: {
        type: String,
        maxlength: 13,
        minlength: 10
    },
    email: {
        type: String,
        maxlength: 32
    },
    appExpress: {
        type: String,
        maxlength: 32
    }
});



const vendors = mongoose.model('Vendor', vendorSchema);
const clients = mongoose.model('Client', clientSchema);

module.exports = vendors;
module.exports = clients;