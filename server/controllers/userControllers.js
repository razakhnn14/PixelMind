import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req,res)=>{
     const { name, email, password } = req.body;
    try {
        if(!name || !email || !password){
          return res.json({success:false,message: "Missingg details"})
        }
        let user = await User.findOne({ email });
        if (user){ return res.json({ msg: "User already exists" });}

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({success:true, token , user:{name:user.name}});
    } catch (err) {
        return res.json({ msg: err.message });
    }
}

export const login = async (req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.json({success:false ,  msg: "Invalid credentials" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){return res.json({success:false ,  msg: "Invalid credentials" });}
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({success:true, token , user:{name:user.name}});
    } catch (err) {
        return res.json({ msg: err.message });
    }
}

export const userCredits = async(req,res)=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        return res.json({success:true, credits:user.credits, user:{name:user.name}});
    }catch(e){
        return res.json({success:false,message:e.message});
    }
}
