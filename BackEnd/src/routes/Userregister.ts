import express, { Request, Response } from "express";
import { User } from "../Schema"; // 👈 import model here
import jwt from "jsonwebtoken";
require("dotenv").config();
const app = express();
import auth,{auth1}  from "../middlewares/auth";
const router = express.Router();
// Middleware (optional)

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, userID } = req.body;
    const newUser = new User({ name, email, password, userID });
    await newUser.save();
    res.json({ success: true, message: "New User registered successfully!" });
  } catch (err: any) {
    console.error("err");
    res.status(500).json({ success: false, message: err.message, successw: "false" });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password, userID } = req.body;
      const user = await User.findOne({ email});
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Invalid password" });
      }
   const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {expiresIn: "1h",});

    res.json({ success: true, message: "user found",user, token });
  } catch (err: any) {
    console.error("err");
    res.status(500).json({ success: false, message: err.message, successw: "false" });
  }
});

router.get("/register", async (req, res) => {
const users = await User.find();
  res.json(users);
});


// 🔒 Protected route
router.get("/profile", auth1, (req, res) => {
  res.json({ message: "Welcome to your profile!"});
});


export default router;
