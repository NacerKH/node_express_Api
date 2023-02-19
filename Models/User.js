const mongoose =require('moongoose')


const UserSchema=  new mongoose.Schema({

    name :{
        type :string,
        required:true
    },
    gender :{
        type:string
    }
})

const UserModel= mongoose.model('user',UserSchema);
module.exports= UserModel