const mongoose = require('mongoose');

const ClanSchema = new mongoose.Schema({
    idclan: Number,
    clanname_th: String,
    clanname_eng: String,
    clan_images: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Clan', ClanSchema);
