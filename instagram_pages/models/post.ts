import mongoose from "mongoose";
const {Schema} = mongoose;

const post = new mongoose.Schema({
    
    post_id:{ 
    type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
     

    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
        required:true
    },
    content:{
    type:String,
    required:true
  },
  post_img_url:{
    type:String,
    required:true
  }
    
});

const postsh = mongoose.model('posts' , post);
export {postsh}