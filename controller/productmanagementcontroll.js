
const ProductModel = require('../models/ProductManagementmodel')   
const ProductData = async(req , res)=>{
try {

    // ******************************************* When Create middle-Ware for backend then use this ( 1st step ) ******************************************//

    // const {ProductName,ProductPrice,ProductQuantity} = req.body;  // after creating simple api next is destruct two properties ⤵️
    //  console.log(req.body);  //check frontend Data   

    //  const DocToCreate = new ProductModel({
    //     ProductName,                                                //Now create query Before Query import ProductModel
    //     ProductPrice,
    //     ProductQuantity,
    //     ProductImageUrl: `/assets/ProductImages/${req.file.filename}`,
    //     ProductImageName: req.file.originalname,
    //     ProductImageMimeType: req.file.mimetype,
        
    // })
    
    // const DocToSave = await DocToCreate.save();                    // and save
    
    //Hey Please Save this Data to My DataBase //IOBlocking await
    // res.json({
    //     // Message:`You have reached at the end point of API now go to hell(🔥🔥🔥🔥)`, 1st step
    //     //Body:req.body
    //     // Body:`${ProductName} \n ${ProductPrice}`                 (and shoe here)                        ◀️◀️◀️◀️                   ◀️◀️◀️◀️           //line n 6 first check this and then (DocToCreate)
    //     Message:`Data Saved Successfully`,
    //     Body:DocToSave,
    //     Data:True
    // });

    // ******************************************* When Create middle-Ware for backend then use this ******************************************//


// ********** Checking for forntend response **************//
    res.json({
        Message:'You have reached the end-point Salman',          // when u get data from frontend then use this....
        Body:req.body,
        Data:true
    })
// ********** Checking for forntend response **************//


// for ( 1st step ) ▶️  u cannot use  filelist because frontend images are in req.filelist multer cannot understand filelist it understand only array
// so we can convert filelist in array 



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
