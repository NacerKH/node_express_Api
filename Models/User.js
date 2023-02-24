const mongoose = require('mongoose');


const UserSchema=  new mongoose.Schema({

    name :{
        type :String,
        required:true
    },
    gender :{
        type:String
    },
 
},
{
    timestamps: true,
  },
)


const UserModel= mongoose.model('user',UserSchema);
module.exports= UserModel