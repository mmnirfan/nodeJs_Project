const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        maxlength: 32
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    actualCost: {
        type: String
    },
    vendorCost: {
        type: String
    },
    advance: {
        type: String
    },
    months: {
        type: String
    },
    deadline: {
        type: String
    }
});

const projects = mongoose.model('Project', projectSchema);
<<<<<<< HEAD
module.exports = projects;
=======
module.exports = projects;
>>>>>>> 59cc3dc27937e9a121030abe7a077ca1a6ec8946
