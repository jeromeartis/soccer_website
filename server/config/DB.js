const mongoose = require("mongoose");
require('dotenv').config();

// mongo connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_HOST, { //creates connection table
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });
  
  mongoose.connection.on("connected", (err, res) => {
    console.log("MongoDB connected successfully!");
  });