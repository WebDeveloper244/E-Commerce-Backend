const express = require("express");
const Router = express.Router();//express function router call with (.) 

// Calling The Controller 4th step
const { ProductData,
      GetProductData,
      UpDateProductData
}= require("../controller/productmanagementcontroll")

Router.post("/ProductData",ProductData);
Router.get("/GetProductData",GetProductData)
Router.post("/UpDateProductData",UpDateProductData)

module.exports=Router;