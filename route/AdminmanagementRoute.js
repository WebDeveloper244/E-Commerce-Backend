const express = require ('express');
const Router = express.Router();

// Accquring MiddleWares
// Accquring MiddleWares

// Accquring Controllers
const { AdminRegister , AdminLogin} = require ('../controller/adminmanagementcontroller')
// Accquring Controllers

// Define Routers
Router.post('/AdminRegister',AdminRegister)
Router.post('/AdminLogin',AdminLogin)
// Define Routers

//Export
module.exports=Router