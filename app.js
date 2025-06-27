require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

//connect DB
mongoose.connect(process.env.MONGO_ATLAS_URL)
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((err) => console.log("DB connection error" , err));

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));
app.use(methodOverride("_method"));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

//routes
const indexRoutes = require("./routes/index");
app.use("/" , indexRoutes);

//server
app.listen(3000 , () => 
    console.log("server started on port 3000"));
