const express = require('express');
const Vendor = require('../models/model');
const router = express.Router('mongoose');

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
        const vendors = await Vendor.findById(req.params.id)
        res.json(vendors);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const vendor = await Vendor.findById(req.params.id)
        vendor.fullName = req.body.fullName
        vendor.contact = req.body.contact
        vendor.whatsappNo = req.body.whatsappNo
        vendor.email = req.body.email
        vendor.alternativeNo = req.body.alternativeNo
        vendor.officeAddress = req.body.officeAddress
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
        b1 = await vendor.remove()
        res.status(200).json({
            message: "Request Vendor was DELETED",
            id: req.params.id
        })
    }catch(err){
        res.send('Error: ' + err);
    }
});

router.post('/', async(req, res) => {
    const vendor = new Vendor({
        fullName: req.body.fullName,
        contact: req.body.contact,
        whatsappNo: req.body.whatsappNo,
        email: req.body.email,
        alternativeNo: req.body.alternativeNo,
        officeAddress: req.body.officeAddress,
        appExpress: req.body.appExpress
    })

    try{
        const b1 = await vendor.save()
        res.status(201).json(b1);
    }catch(err){
        res.status(404).send("Error: " + err);
    }
})


module.exports = router;