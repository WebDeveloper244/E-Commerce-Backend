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
    check
}=require('../middle-wares/FirstMiddleWare'); //Now We Can Use MiddleWare (🚉🚉🚉) Where u Want 

// Calling My MiddleWares  

Router.post("/ProductData",check,ProductData); // I Use MiddleWare In this Route
Router.get("/GetProductData",GetProductData)
Router.post("/UpDateProductData",UpDateProductData) //We can Use Put But Sometimes We Send Payload So That's Why I  Use Post
Router.delete("/DeleteProductData",DeleteProductData)
module.exports=Router;