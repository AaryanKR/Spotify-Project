const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    title: String,
    description: String,
    artist : String,
    image : String
});

module.exports = mongoose.model("Podcast" , podcastSchema);
