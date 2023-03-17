const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Userschema = new schema({
   num_dossier:{
      type:String,
      default:"CRTGHV"+Math.floor(Math.random() * 1000)
      
     },
   name:{
    type:String,
    required:true
   },
   lastName:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   isAdmin:{
      type:Boolean,
      default:false
     },
     isBenevole:{
      type:Boolean,
      default:false
     },
     benevole: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "benevole"
    }
     
   
   
   

}
)

const user = mongoose.model('user',Userschema)
module.exports = user

// module.exports = Person = mongoose.model('person',Userchema)