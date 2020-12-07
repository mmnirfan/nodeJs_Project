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
        project.name = req.body.name
        project.client = req.body.client
        project.vendor = req.body.vendor
        project.actualCost = req.body.actualCost
        project.vendorCost = req.body.vendorCost
        project.advance = req.body.advance
        project.months = req.body.months
        project.deadline = req.body.deadline
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
        name: req.body.name,
        client:req.body.client,
        vendor: req.body.vendor,
        actualCost: req.body.actualCost,
        vendorCost: req.body.vendorCost,
        advance: req.body.advance,
        months: req.body.months,
        deadline:req.body.deadline
    })

    try{
        const c1 = await project.save()
        res.json(c1);
    }catch(err){
        res.send("Error");
    }
})


module.exports = router;
