const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
   
  },
  description: {
    type: String,
   
  },
  image: {
   
    
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  
  },
});

module.exports= mongoose.model("Blog", blogSchema);