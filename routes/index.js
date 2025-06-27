const express = require("express");
const router = express.Router();
const Song = require("../models/Song");
const Podcast = require("../models/Podcast");

router.get("/" , (req , res) => {
    res.render("home");  //will use home.ejs
});

// Show form to create playlist (songs)
router.get("/songs/new" , (req , res) => {
    res.render("newSong");
});

// Handle form submission
router.post("/songs" , async (req , res) => {
    const {name , duration , artist , country , image} = req.body;
    await Song.create({name , duration , artist , country , image});
    res.redirect("/library");
});

//show songs in library
router.get("/library" , async (req , res) => {
    const songs = await Song.find({});
    res.render("library" , {songs});
});

//view podcasts
router.get("/podcasts" , async (req , res) => {
    const podcasts = await Podcast.find({});
    res.render("podcasts" , {podcasts});
});

// Show form to create new podcast
router.get("/podcast/new" , (req , res) => {
    res.render("newPodcast");
});

// Handle form submission
router.post("/podcast" , async (req , res) => {
    const {title , description , artist , image} = req.body;
    await Podcast.create({title , description , artist , image});
    res.redirect("/podcasts");
});

//search route
router.get("/search", async (req, res) => {
  const query = req.query.q;

  if (query) {
    const regex = new RegExp(query, "i"); // case-insensitive search
    const songs = await Song.find({
      $or: [{ name: regex }, { artist: regex }]
    });
    res.render("search", { songs });
  } else {
    res.render("search", { songs: null });
  }
});

//delete route in library
router.delete("/songs/:id" , async (req , res) => {
    const {id} = req.params;
    await Song.findByIdAndDelete(id);
    // console.log(id);
    res.redirect("/library");
});

//delete route in podcasts
router.delete("/podcasts/:id" , async (req , res) => {
    const {id} = req.params;
    await Podcast.findByIdAndDelete(id);
    console.log(id);
    res.redirect("/podcasts");
});

//recently played songs route
router.get("/charts/global", async (req, res) => {
  try {
    const globalSongs = await Song.find({ category: "global" }).limit(20);
    res.render("charts/global", { globalSongs });
  } catch (err) {
    console.error("Error fetching global songs:", err);
    res.status(500).send("Something went wrong");
  }
});


module.exports = router;