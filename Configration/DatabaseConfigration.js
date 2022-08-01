const Package = require("../package.json");
const mongoose= require("mongoose");
mongoose.connect('mongodb+srv://ecom-123:ecom-123@e-commerce.pgkqfrl.mongodb.net/E-Commerce?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{
    if(!error){
console.log(`\nMongoDb connected SucessFully at MongoAtlas WithDatabBase NameHumanoidCrm\n`);
console.log(`\nYour ap has following Dependencies\n`);
for(let dependencies in Package.dependencies){
    console.log(dependencies);
}

    }
    else {console.log(`Error:Not Connected to the MongoDb` + error)}
})