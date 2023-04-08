import  express from "express"
const router= express.Router();
import  User from"../models/USER.js";
import  { verify } from "./verify.js";


//update user
router.put("/update/:id", verify, async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(403).json("You can update only your account");
    }
});

//delete user

router.delete("/:id", verify, async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account");
    }
});

//get a user
router.get("/:id", verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, __v, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        console.log(err);
    }
});


export default router;