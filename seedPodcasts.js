require('dotenv').config();
const mongoose = require("mongoose");
const Podcast = require("./models/Podcast");

mongoose.connect(process.env.MONGO_ATLAS_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const samplePodcasts = [
  {
    title: "The Tim Ferriss Show",
    description: "Interviews with high performers from various fields.",
    artist: "Ellen Mathews"
  },
  {
    title: "Science Vs",
    description: "Pitting facts against popular myths and opinions.",
    artist: "Kate Lockpude"
  },
  {
    title: "The Daily",
    description: "News and insights by The New York Times.",
    artist: "Jolly Base"
  },
  {
    title: "The Joe Rogan Experience",
    description: "Long-form conversations with interesting people.",
    artist: "Joe Rogan"
  },
  {
    title: "The Notorious Man",
    description: "People with dislexia around the whole world collaborate.",
    artist: "Ishan Awasthi"
  },
];

const seedDB = async () => {
  await Podcast.deleteMany({});
  await Podcast.insertMany(samplePodcasts);
  // console.log("Podcasts seeded!");
  mongoose.connection.close();
};

seedDB();