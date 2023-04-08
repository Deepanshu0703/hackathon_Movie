import  express from  "express";
const app = express();
import dotenv from "dotenv";
import  mongoose from "mongoose";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import movieRouter from "./routes/movie.js";

// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
// const postRoute = require("./routes/post");

dotenv.config();
mongoose.set('strictQuery', false);

const connect =()=>{
    try {
        mongoose.connect(process.env.MONGO);
        console.log("Connect to mongobd");
    } catch (error) {
        throw error;
    }
}

//MIDDLEWARE

app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/movie", movieRouter)

app.listen(80, () => {
    connect();
    console.log("CONNECTED TO BACKEND");
})
