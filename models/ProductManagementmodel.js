const mongoose = require("mongoose");
//Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();
const time = today.getTime();

//creating Schema (metaData/Information)
const ProductSchema = mongoose.Schema({
    ProductName :{ type:String , required:true},  //mongo db create indexses
    ProductPrice :{ type:Number , required:true},
    ProductQuantity:{type:Number, required:true, default:0},
    Status :{ type:Number , default:1},
    ProductImageUrl: { type: String },
    ProductImageName: { type: String },
    ProductImageMimeType: { type: String },

    CreateDate :{
        type:String,
        default:`${day}-${month}-${year}-${time}`
    }
})

//Export Schema
module.exports=mongoose.model('ProductCollection',ProductSchema);
