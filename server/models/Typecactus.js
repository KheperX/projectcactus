const mongoose = require('mongoose');

const TypecactusSchema = new mongoose.Schema({
    
    idcactus: Number,
    idwiki: Number,
    cacname: String,
    cacdescription: String,
    sunlight: String,
    weather: String,
    water: String,
    fertilizer: String,
    planting: String,
    cactus_images: String,
    clan: String,
    cacnameeng: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Typecactus', TypecactusSchema);
