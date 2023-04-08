import express from "express"
const router = express.Router();
import Movie from "../models/MOVIES.js";
import User from "../models/USER.js";
import { verify,isAdmin } from "./verify.js";

//create movie
router.post("/create", isAdmin, async (req, res) => {
    const newMovie = new Movie(req.body)

    try {
        const savedMovie = await newMovie.save()
        res.status(200).json(savedMovie);
    } catch (error) {
        res.status(500).json(error)
    }
})
//update movie
router.put("/:id", isAdmin, async (req, res) => {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(movie);
        } catch (err) {
            console.log(err);
        }
    
});

//delete user

router.delete("/:id", isAdmin, async (req, res) => {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    
});

// GET ALL
router.get("/get", isAdmin, async (req, res) => {


    try {
        const movies = await Movie.find(req.params.id)
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const genre = user.genre;
        const language = user.lang;
        console.log(user);
        const movie = await Movie.find({ genre: { $in: genre },lang:{$in: language} });
        res.status(200).json(movie);
    } catch (err) {
        console.log(err);
    }
});


export default router;