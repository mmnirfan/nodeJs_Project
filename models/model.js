const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        length: 32
    },
    whatsappNo: {
        type: String,
        required: true,
        length: 13
    },
    email: {
        type: String,
        required: true,
        length: 32
    },
    officeAddress: {
        type: String,
        required: true,
    }
}, { timestamps: true });



const vendorSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        length: 32
    },
    contact: {
        type: String,
        required: true
    },
    whatsappNo: {
        type: String,
        required: true,
        length: 13
    },
    alternativeNo: {
        type: String,
        required: true,
        length: 13
    },
    email: {
        type: String,
        required: true,
        length: 32
    },
    appExpress: {
        type: String,
        required: true,
    }
}, { timestamps: true });



const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        length: 32
    },
    client: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    actualCost: {
        type: String,
        required: true,
    },
    vendorCost: {
        type: String,
        required: true,
    },
    advance: {
        type: String,
        required: true,
    },
    months: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const projects = mongoose.model('Project', projectSchema);
const vendors = mongoose.model('Vendor', vendorSchema);
const clients = mongoose.model('Client', clientSchema);
module.exports = projects;
module.exports = vendors;
module.exports = clients;