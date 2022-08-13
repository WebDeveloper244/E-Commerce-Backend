const _AdminManagementModel = require('../models/AdminManagementModel');  //import from admin-model

const jwt = require('jsonwebtoken');  
const bcrypt = require('bcrypt');

const AdminRegister= async(req,res) => {                                                        //create AdminRegister 
    try {
        const {FirstName, LastName, Email, Password} = req.body;                               // destruct (FirstName, LastName, Email, Password) from req.body
        const _GetAdminUserLength = _AdminManagementModel.find();                              // find _AdminManagementModel 
        if (_GetAdminUserLength.length >= 1) {
            res.json({
                Message:`Admin Regesteration is Constraint`,
                Status:null,
                Data:false
            })
        } else {
            const _RegisterAdmin = new _AdminManagementModel({
                FirstName:FirstName,
                LastName:LastName,
                Email:Email,
                Password:Password,
                RealPassword:Password            
            });
            await _RegisterAdmin.save();
            res.json({
                Message:`User Register Successfully`,
                Data:true,
                Result:_RegisterAdmin
            })
        }
    } catch (error) {
        res.json({ Message: error.message, Result: false });
    }
}

const AdminLogin = async (req,res) => {
    try {
        _Email = req.body.Email;
        _Password = req.body.Password;
        let _AdminToAuthenticate = await _AdminManagementModel.findOne({ Email: _Email });
        if (_AdminToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Result: null,
                Data:false
            })
        }

        const _Result = await bcrypt.compare(_Password, _AdminToAuthenticate.Password);  // req.body.password  and AdminToAuthenticate.Password <==_AdminManagementModel.password
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Data: false,
                Result: null
            })
        }                                             // when Password and email matched then go to next step 
        const _Token = jwt.sign(                     // jwt.sign take three arguments first payload/body second second secreate-key third expire-time
            {
                Email: _AdminToAuthenticate.Email,   
                UserId: _AdminToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )

        return res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Token: _Token,
            Result: _AdminToAuthenticate
        })
   
        

    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

// userlogin and regester is (authentication) 
// kis user ko kiaa access milni chahiyaa (authorization)
// this is called roll system