const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 32
    },
    whatsappNo: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        maxlength: 32
    },
    officeAddress: {
        type: String,
        required: true,
        maxlength: 52
    }
}, { timestamps: true });



const vendorSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxlength: 32
    },
    contact: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 10
    },
    whatsappNo: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 10
    },
    alternativeNo: {
        type: String,
        required: true,
        maxlength: 13,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        maxlength: 32
    },
    appExpress: {
        type: String,
        required: true,
        maxlength: 32
    }
}, { timestamps: true });



const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    client: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'client',
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'client',
        required: true
    },
    actualCost: {
        type: String,
        required: true
    },
    vendorCost: {
        type: String,
        required: true
    },
    advance: {
        type: String,
        required: true
    },
    months: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }
}, { timestamps: true });


const projects = mongoose.model('Project', projectSchema);
const vendors = mongoose.model('Vendor', vendorSchema);
const clients = mongoose.model('Client', clientSchema);
module.exports = projects;
module.exports = vendors;
module.exports = clients;