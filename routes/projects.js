const express = require('express');
const Project = require('../models/model');
const router = express.Router('mongoose');

router.get('/', async(req, res) => {
    try{
        const projects = await Project.find()
        res.json(projects);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const projects = await Project.findById(req.params.id)
        res.json(projects);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const project = await Project.findById(req.params.id)
        project.fullName = req.body.fullName
        project.contact = req.body.contact
        project.whatsappNo = req.body.whatsappNo
        project.email = req.body.email
        project.alternativeNo = req.body.alternativeNo
        project.officeAddress = req.body.officeAddress
        project.appExpress = req.body.appExpress
        const c1 = await project.save()
        res.json(c1);
    }catch(err){
        res.send('Error: ' + err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const project = await Project.findById(req.params.id)
        c1 = await project.remove()
        res.status(200).json({
            message: "Request Vendor was DELETED",
            id: req.params.id
        })
    }catch(err){
        res.send('Error: ' + err);
    }
});

router.post('/', async(req, res) => {
    const project = new Project({
        fullName: req.body.fullName,
        contact:req.body.contact,
        whatsappNo: req.body.whatsappNo,
        email: req.body.email,
        alternativeNo: req.body.alternativeNo,
        officeAddress: req.body.officeAddress,
        appExpress: req.body.appExpress
    })

    try{
        const c1 = await project.save()
        res.json(c1);
    }catch(err){
        res.send("Error");
    }
})


module.exports = router;