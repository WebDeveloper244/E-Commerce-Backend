
const ProductModel = require('../models/ProductManagementmodel')
const ProductData = async(req , res)=>{
try {

    const {ProductName,ProductPrice} = req.body;
     console.log(req.body); //check frontend Data

     const DocToCreate = new ProductModel({
        ProductName,
        ProductPrice,
        
    })
    const DocToSave = await DocToCreate.save();
    //Hey Please Save this Data to My DataBase //IOBlocking await
    res.json({
        Message:`You have reached at the end point of API now go to hell(🔥🔥🔥🔥)`,
        //Body:req.body
        // Body:`${ProductName} \n ${ProductPrice}`
        Body:DocToSave
    });
} catch (error) {
    res.json({
        Message:error.message,
        Result:null,
        Data:false
    });
}
}

const GetProductData = async(req,res)=>{
    try {
        const DoctToGet = await ProductModel.find({},{ProductPrice:0});
        res.json({
            Message:'Document has found',
            Data:true,
            Result:DoctToGet
        })
    } catch (error) {
       res.json({
        Message:error.message,
        Result:null,
        Data:false
       })
    }
}

const UpDateProductData = async(req,res)=>{
    try {
        // const DoctToUpDate = await ProductModel.updateMany({Status:1},{Status:0});
        const DoctToUpDate = await ProductModel.updateMany({ProductPrice:0});
        res.json({
            Message:'Document has Updated',
            Data:true,
            Result:DoctToUpDate
        })
    } catch (error) {
       res.json({
        Message:error.message,
        Result:null,
        Data:false
       })
    }
}



module.exports={
    ProductData,
    GetProductData,
    UpDateProductData
}
//3rd Step
