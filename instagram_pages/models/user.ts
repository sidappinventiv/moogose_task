import mongoose from 'mongoose';
const {Schema} = mongoose;



const user = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        minlength:8
    },
    password:{
        type:String,
        required:true
    },
    profile_pic:{
        type:String,
        required:true

    },
    bio:{
        type:String
    },
    gender:{
        type:String,
        enum: ['F','M','ts']
    }

})
const users = mongoose.model('user' , user);
export {users};



