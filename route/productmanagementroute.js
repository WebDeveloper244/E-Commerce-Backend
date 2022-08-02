const express = require("express");
const Router = express.Router();//express function router call with (.) 

// Calling The Controller 4th step
const { ProductData,
      GetProductData,
      UpDateProductData,
      DeleteProductData
}= require("../controller/productmanagementcontroll")

Router.post("/ProductData",ProductData);
Router.get("/GetProductData",GetProductData)
Router.post("/UpDateProductData",UpDateProductData) //We can Use Put But Sometimes We Send Payload So That's Why I  Use Post
Router.delete("/DeleteProductData",DeleteProductData)
module.exports=Router;