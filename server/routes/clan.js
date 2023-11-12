const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Clan = require('../models/Clan.js');

//api endpoint
router.get('/', async (req, res, next) => {
    try {
        const clan = await Clan.find();
        res.json(clan);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Clan.findById(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const post = await Clan.create(req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const post = await Clan.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Clan.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

module.exports = router;