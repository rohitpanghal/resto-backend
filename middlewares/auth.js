const CustomErrorHandler = require("../services/CustomErrorHandler");
const JwtService = require("../services/JwtService");

const auth= async (req,res,next)=>{
    let authHeader=req.headers.authorization;
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized())
    }
    let token=authHeader.split(" ")[1];
    try{
        const {userId,role}= await JwtService.verify(token)
        const obj={
            userId,
            role
        }
     
        req.user=obj
        next()
    }
    catch(err){
        return next(CustomErrorHandler.unAuthorized())
    }
}
module.exports=auth