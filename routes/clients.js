const express = require('express');
const Client = require('../models/model');
const router = express.Router('mongoose');

router.get('/', async(req, res) => {
    try{
        const clients = await Client.find()
        res.json(clients);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const clients = await Client.findById(req.params.id)
        res.json(clients);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const client = await Client.findById(req.params.id)
        client.fullName = req.body.fullName
        client.whatsappNo = req.body.whatsappNo
        client.email = req.body.email
        client.officeAddress = req.body.officeAddress
        const a1 = await client.save()
        res.json(a1);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.post('/', async(req, res) => {
    const client = new Client({
        fullName: req.body.fullName,
        whatsappNo: req.body.whatsappNo,
        email: req.body.email,
        officeAddress: req.body.officeAddress
    })

    try{
        const a1 = await client.save()
        res.json(a1);
    }catch(err){
        res.send("Error");
    }
})


module.exports = router;