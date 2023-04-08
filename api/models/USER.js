import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        // unique:true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
    ,
    password: {
        type: String,
        require: true,
    },
    profilePicture: {
        type: String,
        default:" "
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    genre: {
        type: Array,
        default:["Love"]
    },
    lang:{
        type:Array,
        default:["Hindi"]
    },
    isVerified:{
        type:Boolean,
        default:false,
        require:true
    }


}
    , { timestamps: true });

export default mongoose.model("User", userSchema);