const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    title:String,
    body:String,
    userID:String,
    device : String

})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}