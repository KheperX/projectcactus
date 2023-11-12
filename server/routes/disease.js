const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Disease = require('../models/Disease.js');

//api endpoint
router.get('/', async (req, res, next) => {
    try {
        const disease = await Disease.find();
        res.json(disease);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Disease.findOne({iddis:req.params.id});
        res.json(post);
       
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const post = await Disease.create(req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const post = await Disease.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Disease.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});





module.exports = router;