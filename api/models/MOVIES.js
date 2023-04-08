import  mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true

    },
    lang:{
        type:String,
        require:true
    },
    genre: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    image: {
        type: String,
        // require: true
    },
    trailer: {
        type: String,
        // require: true
    },
    cast: {
        type: Array,
        // require: true
    },
    director: {
        type: String,
        // require: true
    }




}
    , { timestamps: true });

export default mongoose.model("Movie", movieSchema);