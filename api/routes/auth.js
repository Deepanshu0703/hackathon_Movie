import  express from "express"
const router =express.Router();
import  User       from "../models/USER.js";
import  jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
var otp=Math.random();
otp=otp*1000000;
otp=parseInt(otp);
console.log(otp);
//Register
router.post("/register", async (req, res) => {
    const sendEmail=req.body.email;
    const newuser =new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log(otp);
    try {
        const user = await newuser.save();
        
        const accessToken = jwt.sign({ id: user._id ,admin:user.isAdmin},process.env.KEY);
        const { password, ...others } = user._doc;
        

                    let transporter =nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false,
                        requireTLS: true,
                        auth: {
                            user: '21bcs072@iiitdmj.ac.in',
                            pass: process.env.PASSWORD
                        }
                    });

                    let mailOptions = {
                        from: '21bcs072@iiitdmj.ac.in',
                        to: sendEmail,
                        subject: 'Email Verification',
                        text: 'Your account has been created successfully.Please verify your email.Your otp is '+otp+'.'
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error.message);
                        }
                        else{
                            res.status(200).json({ ...others, accessToken }).send(accessToken);
                        }
                    });
    
       
    } catch (err) {
        console.log(err);
    }
}
);

router.patch("/verify/:id",async (req, res) => {
    if(req.body.otp===otp){
                try {
                    const user = await User.findById(req.params.id);
                    const { password, updatedAt, __v, ...other } = user._doc;
                    if (user.isVerified === false) {
                        await user.updateOne({ $set: { isVerified: true } });
                        res.status(200).json("user has been verified");
                    } else {
                        res.status(403).json("user is already verified");
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                res.status(403).json("you are not authorized");
            }
        });

        
//Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found");

        if (user.password !== req.body.password) {
            res.status(400).json("Wrong password");
        }
        if(!user.isVerified){
            res.status(400).json("Not veridied"); 
        }
        const accessToken = jwt.sign({ id: user._id,  admin: user.isAdmin }, "kvnfvjnfvjfnvdkrvfdklvnf");
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken }).send(accessToken);
    } catch (err) {
        console.log(err);
    }
});
export default router;