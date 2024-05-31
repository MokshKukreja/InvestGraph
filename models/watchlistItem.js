const mongoose = require('mongoose');
const watchlistItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps:true});
const Watchlist = mongoose.model('Watchlist', watchlistItemSchema);
module.exports = Watchlist;
