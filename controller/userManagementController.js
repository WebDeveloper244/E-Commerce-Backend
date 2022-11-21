const UserModel = require('../models/UserManagementModel')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

const userRegister = async (req,res)=>{
try {
    const {firstName,lastName,email,password,userPrivilage} = req.body
const checIfAdminAlreadyExsist = await UserModel.find(
    {email:email}
)
if(checIfAdminAlreadyExsist && checIfAdminAlreadyExsist === 'Admin'){
    return res.json({
        Message:`Admin Register Is Constraint`,
        Result:null,
        data:false
    })
}
const checkAdminIdentity = email.split('@')[0];
checkAdminIdentity.toLowerCase()
if(checkAdminIdentity === 'Admin'){
    const AdminRegister = new UserModel ({
        firstName,lastName,email,password,userPrivilage:'Admin'
    })
    const adminToSave = await AdminRegister.save()
       return res.json({
        Message:`Register Successfuly`,
        data:true
    })
}
const userToCreate = await UserModel(
    firstName,lastName,email,password
)
userToSave = await userToCreate.save()
res.json({
    Message:`Register Successfuly`,
    data:true
})
} catch (error) {
    res.json({
        Message:error,
        data:false
    })
}
}

const userLogin = async (req,res)=>{
    try {
        const {email, password} = req.body
        const checkUserExistance = await UserModel.findOne(
          {email:email}
        )
        if(Object.keys(checkUserExistance).length === 0){
            return res.json({
                Message:`Either incorrect password or email`,
                data:false
            })
        }
        const checkUserPassword = await bcrypt.compare(password,checkUserExistance.password)
        if(checkUserPassword === false){
            return res.json({
                Message:`Either incorrect password or email`,
                data:false
            })
        }
        const _Token = jwt.sign(                     // jwt.sign take three arguments first payload/body second secreate-key third expire-time
            {
               name : 'hi'// payload/body
            },
            'superSecreate',                                       // secreate-key 
            { expiresIn: '1h' }                           //  expire-time
        )

        res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Result: _Token,
            
        })

    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}
module.exports = {
    userRegister,
    userLogin 
}