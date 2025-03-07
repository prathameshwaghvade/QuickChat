import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signup = async (req,res)=>{

    const { fullName, email, passsword } = req.body;

    try {
        if (passsword.length<6){
            return res.status(400).json({message:"password must be at least 6 characters"});
        }

        const User = await User.findOne({email})

        if (User) return res.status(400).json({message:"password must be at least 6 characters"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(passsword,salt)

        const newUser = new User({
           fullName,
           email,
            passsword:hashedPassword
        })


        if(newUser){

            //generating jwt token

        }
        else{
            res.status(400).json({message:"Invalid user data"});
        }


        
        
    } catch (error) {
        
    }
    
};

export const login = (req,res)=>{
    res.send("login route");
};


export const logout = (req,res)=>{
    res.send("logout route");
};



