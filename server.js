const express = require("express");// Only ImPort Express frameWork 
const cors = require("cors");
const app = express();//All the Classes of Express FrameWork in App now you can get any class with (.) bracket is use because its a class
const Port = process.env.Port||8080;

const ApplicationConfig = require ('./Configration/LoadMyConfig-Env-file')

const ResponseOfMyDataBaseConnection = require("./Configration/DatabaseConfigration");
//Block Dependencies


//Block Start Initialize the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
app.use('/assets',express.static('assets'));
//Block Start Initialize the app


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other route
});
//End Block Setting the Header for your Application


//Now calling (📱📱) My Routes
const ProductManagementRouter = require("./route/productmanagementroute");

/*******************************Using Routes*************/
app.use("/ProductManagement",ProductManagementRouter);
/*******************************Using Routes*************/


//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
//End Block Checking Routes As express not found Url not Founded we need to do it explicitly 

app.listen(Port,()=>{
    console.log(`Your Server has been launched (🚀🚀🚀🚀) ${Port}`);
});
// yahan tak http//localhost:2400=>(slag) ka matlab hay
// 1st step



// (1st-Step) First of All Create Simple API server.js to controller  
// (2st-Step) now install Mongoose first(1st) work of Mongoose-Driver is Connection so create configration folder and make DatabaseConfig.js second(2nd) Work 
//  mongoose.schema ((is a function only take one argument that is object)) so create model so make model folder and then make product-model.js file now crete model.
// and third step is mongoose.model it create model in database it takes 2 arguments 1st argument is create collections and 2nd arguments is variable
// (3rd-Step) First of All Create Simple API server.js to controller  
// (1st-Step) First of All Create Simple API server.js to controller  
// (1st-Step) First of All Create Simple API server.js to controller  


// (2nd-step knowldge 1st-arguments) sql create tables and rows 
// non-sql create collections on the place of table and create object on the place of rows