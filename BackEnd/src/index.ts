import express, { Request, Response } from "express";
require('dotenv').config();
import userRoutes from "./routes/Userregister";
import { User } from "./Schema"; // 👈 import model here
import jwt from "jsonwebtoken";



const app = express();


// Middleware (optional)
app.use(express.json());


// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const mongoose = require('mongoose');
mongoose.connect(MONGO_URI).then(async () => {
    console.log("✅ Connected to MongoDB Atlas");
    // ✅ Ensure unique index for email is created
    await User.init(); // this line creates indexes defined in schema (e.g., unique: true)
    console.log("✅ Indexes ensured");
  })
  .catch((err:any) => console.error("❌ MongoDB connection error:", err));








// 🧠 Use routes
app.use("/", userRoutes); 




// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
