const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Typecactus = require('../models/Typecactus.js');

//api endpoint
router.get('/', async (req, res, next) => {
    try {
        const typecactus = await Typecactus.find();
        res.json(typecactus);
    } catch (err) {
        next(err);
    }
});

router.get('/clan/:id', async (req, res, next) => {
    try {
        const post = await Typecactus.find({idwiki:req.params.id});
        res.json(post);
       
    } catch (err) {
        next(err);
    }
});


router.get('/cactus/:id', async (req, res, next) => {
    try {
        const post = await Typecactus.findOne({idcactus:req.params.id});
        res.json(post);
       
    } catch (err) {
        next(err);
    }
});




router.post('/', async (req, res, next) => {
    try {
        const post = await Typecactus.create(req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const post = await Typecactus.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Typecactus.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});





module.exports = router;