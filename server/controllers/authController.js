import User from "../models/Users.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//signup
export const signup = async (req, res) =>{
    try {
        
        const {name, email, password} = req.body;

        //validation
        if(!name || !email || !password){
            return res.status(400).json({
                message : "Please fill all fields"
            });
        }

        //check for the existing user
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //creating new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({message: "signup successful", user});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "server error"});
    }
};

//signin
export const signin = async (req,res) => {
    try {
        
        const {email, password} = req.body;

        //validation
        if(!email || !password){
            return res.status(400).json({message: "Please fill all fields"});
        }

        //find user
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        //compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }

        //create token
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.status(200).json({
            message: "signin successful",
            token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({message: "Server error"});  
    }
};