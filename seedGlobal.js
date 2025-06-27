require('dotenv').config();
const mongoose = require("mongoose");
const Song = require("./models/Song"); // adjust path if needed

mongoose.connect(process.env.MONGO_ATLAS_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const globalSongs = [
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    country: "Canada",
    image: "https://variety.com/wp-content/uploads/2019/11/the-weeknd-blinding-lights-cover-final-e1581621866909.jpg?w=1000&h=667&crop=1",
    category: "global"
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    duration: "3:23",
    country: "UK",
    image: "https://images.genius.com/5e8033fc477d4219f566945c7db70b38.300x300x1.png",
    category: "global"
  },
  { name: "Die With A Smile", 
    artist: "Lady Gaga & Bruno Mars", 
    duration: "4:12", 
    country: "USA", 
    image: "https://c.saavncdn.com/060/Die-With-A-Smile-English-2024-20240816103634-500x500.jpg", 
    category: "global" 
  },
  { 
    name: "Apt.", 
    artist: "ROSÉ & Bruno Mars", 
    duration: "2:50", country: "Korea/USA", 
    image: "https://i1.sndcdn.com/artworks-HvdXyajyk9klh77y-MrDpyA-t500x500.jpg", 
    category: "global" 
  },
  { 
    name: "Ordinary", 
    artist: "Alex Warren", 
    duration: "3:07", country: "USA", 
    image: "https://i.scdn.co/image/ab67616d0000b273fa2bcf3df669bde08b2e7d36", 
    category: "global" 
  },
  { 
    name: "Luther", 
    artist: "Kendrick Lamar & SZA", 
    duration: "3:30", 
    country: "USA", 
    image: "https://i.scdn.co/image/ab67616d0000b27309d6ed214f03fbb663e46531", 
    category: "global" 
  },
  { 
    name: "Manchild", 
    artist: "Sabrina Carpenter", 
    duration: "3:33", 
    country: "USA", 
    image: "https://www.billboard.com/wp-content/uploads/2025/06/sabrina-carpenter-manchild-2025-billboard-1548.jpg?w=942&h=623&crop=1", 
    category: "global" 
  },
  { 
    name: "Not Like Us", 
    artist: "Kendrick Lamar", 
    duration: "4:34", 
    country: "USA", 
    image: "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad", 
    category: "global" 
  },
  { 
    name: "Offa Me", 
    artist: "Davido feat. Victoria Monét", 
    duration: "3:09", 
    country: "Nigeria/USA", 
    image: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/084_Shotbycozyy_gzhlgr/victoria-monet-davido-offa-me-music-video-song-review.jpg", 
    category: "global" 
  },
  { 
    name: "Die With A Smile (Remix)", 
    artist: "Lady Gaga & Bruno Mars", 
    duration: "4:12", 
    country: "USA", 
    image: "https://c.saavncdn.com/060/Die-With-A-Smile-English-2024-20240816103634-500x500.jpg", 
    category: "global" 
  },
  { 
    name: "Espresso", 
    artist: "Sabrina Carpenter", 
    duration: "2:56", 
    country: "USA", 
    image: "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5", 
    category: "global" 
  },
  { 
    name: "Anxiety", 
    artist: "Doechii", 
    duration: "4:09", 
    country: "USA", 
    image: "https://i.scdn.co/image/ab67616d0000b273d4fa73a4a7541241fe3efbe6", 
    category: "global" },
  { 
    name: "Messy (F1)", 
    artist: "ROSÉ", 
    duration: "2:59", 
    country: "Korea", 
    image: "https://variety.com/wp-content/uploads/2025/01/lola-young-artist-2-e1737441629965.jpg?w=1000&h=667&crop=1", 
    category: "global" 
  },
  { 
    name: "Die With A Smile (Acoustic)", 
    artist: "Lady Gaga & Bruno Mars", 
    duration: "4:15", country: "USA", 
    image: "https://c.saavncdn.com/060/Die-With-A-Smile-English-2024-20240816103634-500x500.jpg", 
    category: "global" 
  },
  { 
    name: "Pink Pony Club", 
    artist: "Chappell Roan", 
    duration: "3:14", 
    country: "USA", 
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-08/chappell-roan-pink-pony-club-today-sk-240814-271ec6.jpg", 
    category: "global" 
  },
  { 
    name: "Beautiful Things", 
    artist: "Benson Boone", 
    duration: "3:00", 
    country: "USA", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-oPDfFOoiE0vO7e6i4KsDcudMvA9hw8MZQ&s", 
    category: "global" },
  { 
    name: "Lose Control", 
    artist: "Teddy Swims", 
    duration: "3:31", 
    country: "USA", 
    image: "https://www.billboard.com/wp-content/uploads/2023/10/chartbreaker-teddy-swims-billboard-2023-bb13-meredith-jenks-2-1260.jpg?w=1024", 
    category: "global" 
  },
  { 
    name: "Bad Dreams", 
    artist: "Teddy Swims", 
    duration: "3:05", 
    country: "USA", 
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/Teddy_Swims_-_Bad_Dreams.png", 
    category: "global" 
  },
  { 
    name: "Nokia", 
    artist: "Drake", 
    duration: "2:59", 
    country: "Canada", 
    image: "https://i.scdn.co/image/ab67616d0000b273cc392813bfd8f63d4d5f4a95", 
    category: "global" 
  },
  { 
    name: "Azizam", 
    artist: "Ed Sheeran", 
    duration: "2:42", 
    country: "UK", 
    image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Ed_Sheeran_-_Azizam.png", 
    category: "global" 
  }
  
];

async function seed() {
  await Song.deleteMany({ category: "global" });
  const inserted = await Song.insertMany(globalSongs);
  mongoose.connection.close();
}

seed();
