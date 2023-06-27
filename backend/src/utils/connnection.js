const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/movie-ticket",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("DATABASE IS CONNECTED! All set to go");
  }
);
