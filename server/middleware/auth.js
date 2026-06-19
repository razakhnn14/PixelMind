import jwt from "jsonwebtoken";

const userAuth = async(req,res,next)=>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.json({success:false,message:"Not Authorized"});
    }
    try{
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.user = {id:tokenDecode.id};
        }else{
            return res.json({success:false,message:"Not Authorized"});
        }
        next();
    }catch(e){
        res.json({success:false,message:"Not Authorized"});
    }

}

export default userAuth;