const mongoose=require('mongoose');
mongoose.connect("mongodb://172.28.0.2:27017/imagen");
module.exports=mongoose;
