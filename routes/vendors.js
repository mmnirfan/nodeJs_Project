const express = require('express');
const Vendor = require('../models/vendors_model');
const router = express.Router('mongoose');

router.post('/', async(req, res) => {
    const vendor = new Vendor({
        name: req.body.name,
        contact: req.body.contact,
        whatsappNo: req.body.whatsappNo,
        email: req.body.email,
        alternativeNo: req.body.alternativeNo,
        appExpress: req.body.appExpress
    })

    try{
        const b1 = await vendor.save()
        res.status(201).json(b1);
    }catch(err){
        res.status(500).send("Error: " + err);
    }
});

router.get('/', async(req, res) => {
    try{
        const vendors = await Vendor.find()
        res.json(vendors);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const vendor = await Vendor.findById(req.params.id)
        res.json(vendor);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const vendor = await Vendor.findById(req.params.id)
        vendor.name = req.body.name
        vendor.contact = req.body.contact
        vendor.whatsappNo = req.body.whatsappNo
        vendor.email = req.body.email
        vendor.alternativeNo = req.body.alternativeNo
        vendor.appExpress = req.body.appExpress
        
        const b1 = await vendor.save()
        res.json(b1);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const vendor = await Vendor.findById(req.params.id)
        const b1 = await vendor.remove()
        res.status(200).json({
            message: "Request Vendor was DELETED",
            id: req.params.id,
            vendor
        })
    }catch(err){
        res.send('Error: ' + err);
    }
});


module.exports = router;