const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    iddis: Number,
    disname: String,
    disname_eng: String,
    disdescription: String,
    protection: String,
    treat: String,
    images: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Disease', DiseaseSchema);
