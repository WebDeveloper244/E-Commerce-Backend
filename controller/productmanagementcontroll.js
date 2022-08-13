
const ProductModel = require('../models/ProductManagementmodel')   
const ProductData = async(req , res)=>{
try {

    const {ProductName,ProductPrice} = req.body;  // after creating simple api next is destruct two properties ⤵️
     console.log(req.body); //check frontend Data   

     const DocToCreate = new ProductModel({
        ProductName,                                                //Now create query Before Query import ProductModel
        ProductPrice,
        ProductQuantity,
        ProductImageUrl: `/assets/ProductImages/${req.file.filename}`,
        ProductImageName: req.file.originalname,
        ProductImageMimeType: req.file.mimetype,
        
    })
    const DocToSave = await DocToCreate.save();                    // and save
    //Hey Please Save this Data to My DataBase //IOBlocking await
    res.json({
        Message:`You have reached at the end point of API now go to hell(🔥🔥🔥🔥)`,
        //Body:req.body
        // Body:`${ProductName} \n ${ProductPrice}`                 (and shoe here)                        ◀️◀️◀️◀️
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
        const DoctToGet = await ProductModel.find(
            {Status:0},//Condition
            {ProductPrice:1800});//Projection
            //option
            //get(find() or findOne())
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
      const DoctToUpDate = await ProductModel.updateMany({_id:'62e7e0f03d629fe1e90bf0ca'},{ProductPrice:1600});
        res.json({
            Message:'Document has Updated',
            Data:true,
            Result:DoctToUpDate
        })
        //(Update() Updatemany())
    } catch (error) {
       res.json({
        Message:error.message,
        Result:null,
        Data:false
       })
    }
}

const DeleteProductData = async(req,res)=>{
    try {
        
      const DoctToDelete = await ProductModel.deleteMany({Status:0});
        res.json({
            Message:'Document has Deleted',
            Data:true,
            Result:DoctToDelete
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
    UpDateProductData,
    DeleteProductData
}
//3rd Step
