const User = require("../models/user");

const userController={
    getUserDetails: async(req,res,next)=>{
         const {userId}= req.user;
        try{
        let response=await User.findOne({where:{userId:userId}})
        let data={
            userId:response.userId,
            name:response.name,
            email:response.email,
            rele:response.role,
            phone: response.phone,
            address: response.address,
            area: response.area,
            zip: response.zip,
        }
        res.json(data)
    }
    catch(err){
        return next()
    }
    }
}

module.exports=userController;