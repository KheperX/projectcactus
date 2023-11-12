const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Wiki = require('../models/Wiki.js');

//api endpoint
router.get('/', async (req, res, next) => {
    try {
        const wiki = await Wiki.find();
        res.json(wiki);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Wiki.find({idwiki:req.params.id});
        res.json(post);
    } catch (err) {
        next(err);
    }
});



// router.post('/', async (req, res, next) => {
//     try {
//         const post = await Wiki.create(req.body);
//         res.json(post);
//     } catch (err) {
//         next(err);
//     }
// });

router.put('/:id', async (req, res, next) => {
    try {
        const post = await Wiki.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Wiki.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

module.exports = router;