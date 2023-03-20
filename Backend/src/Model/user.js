const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  
  },
  email: {
    type: String,
  
  },
  password: {
    type: String,
  
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
});
module.exports= mongoose.model("User", userSchema);