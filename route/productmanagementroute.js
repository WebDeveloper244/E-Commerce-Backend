const express = require("express");
const Router = express.Router();//express function router call with (.) 


// Calling The Controller 4th step
const { ProductData,
      GetProductData,
      UpDateProductData,
      DeleteProductData
}= require("../controller/productmanagementcontroll")

// Calling The Controller 4th step


// Calling My MiddleWares
const {
    UploadProductImage
}=require('../middle-wares//Upload-Media'); 

// Calling My MiddleWares  

Router.post("/ProductData",UploadProductImage.array('ProductImage',10),ProductData);                                                   //create
Router.get("/GetProductData",GetProductData)                                                                                        //read
Router.post("/UpDateProductData",UpDateProductData) //We can Use Put But Sometimes We Send Payload So That's Why I  Use Post        //update
Router.delete("/DeleteProductData",DeleteProductData)                                                                               //delete
module.exports=Router; 