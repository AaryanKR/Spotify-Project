const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    name : String,
    duration : String,
    artist : String,
    country : String,
    image : String,
    category : String
});

module.exports = mongoose.model("Song" , songSchema);
