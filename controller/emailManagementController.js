const { sendMail } =  require('../missculinius/sendMailManagement');

const sendEmailAgent = async(req, res) => {
    try {
        // {firstName,email,message} = req.body 
        let payLoad =  req.body;
        const emailResponse = await sendMail(payLoad);
        res.json({
            message:emailResponse
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
}


module.exports = {
    sendEmailAgent
}