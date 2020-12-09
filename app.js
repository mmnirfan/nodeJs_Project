const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/nodeJs_newDBex"

const app = express();


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json());

const clientRouter = require('./routes/clients')
app.use('/clients', clientRouter);

const vendorRouter = require('./routes/vendors')
app.use('/vendors', vendorRouter);

app.listen(9000, function(){
    console.log('Server started');
});