const express = require("express");
const Router = express.Router();//express function router call with (.) 
const product = require('../models/ProductManagementmodel');


// Calling The Controller 4th step
const { ProductData,
      GetProductData,
      UpDateProductData,                                                          // Testing-Data-Base is (Data-Base) Name and then Collection is (productCollections) and in this productCollections Documents
      DeleteProductData,                                                             // Which is actually called (Objects) and in sql Testing-Data-Base is (Data-Base) and  (productCollections) is table and then (rows)
      getDocumentById       // frontendData api
}= require("../controller/productmanagementcontroll")

// Calling The Controller 4th step


// Calling My MiddleWares
const {
    UploadProductImage
}=require('../middle-wares//Upload-Media'); 

// Calling My MiddleWares  

Router.post("/ProductData",UploadProductImage.array('images',5),ProductData);                                                   //create
Router.get("/GetProductData",GetProductData)                                                                                        //read
Router.post("/UpDateProductData",UpDateProductData) //We can Use Put But Sometimes We Send Payload So That's Why I  Use Post        //update
Router.delete("/DeleteProductData",DeleteProductData)    
Router.get(`/getDocumentById/:Id`,getDocumentById )                    

Router.get(`/checkGetProducts`, async (req,res,next)=>{
    try {
        console.log(req.query);
    const products = await product.find().where("companyName").equals(req.query.brand).or().where("price").gt(+(req.query.price));
    res.status(200).json({
        data: products
    })
    } catch (error) {
        console.log(error);
    }
})

// Calling routes for frontend work......
module.exports=Router; 

