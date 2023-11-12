const mongoose = require('mongoose');

const WikiSchema = new mongoose.Schema({
    idwiki: Number,
    wikiname_th: String,
    wikiname_eng: String,
    wiki_images: String,
    clan: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wiki', WikiSchema);
