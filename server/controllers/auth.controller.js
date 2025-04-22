import User from '../models/user.model.js'
import bcrypt, { hashSync } from 'bcrypt'
export const signup= async(req, res)=>{
    console.log(req.body)
    const {username, email, password}= req.body
    if(!username || !email || !password){
        return res.status(400).json({success:false, message:'Supply all field'})
    }
    try {
        const hashedPasword= await bcrypt.hash(password,10)
        const savedUser = await User.create({username, email, password:hashedPasword})
        return res.status(201).json({success:true, message:'User has been created', savedUser})
    } catch (error) {
        console.log(error)
    }
}