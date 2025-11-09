require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
//const MONGO_URI = "mongodb+srv://lalilswani:KrGXqcaDbahGMmaL@cluster0.ygf21f6.mongodb.net/NodeJs_backend?retryWrites=true&w=majority&appName=Cluster0";
// ✅ Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// 🧠 Define Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// This will automatically connect to collection "userRegistrations"

const User = mongoose.model('userRegistration', userSchema, 'userRegistrations');
// 🧪 Routes
app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB Atlas 💫');
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ success: true, message: 'New User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message } );
  }
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
