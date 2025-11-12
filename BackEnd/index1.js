//git remote add origin https://github.com/wanilalits/NodeJs_09-11-2025.git
//git branch -M main
//git push -u origin main
//git status
//git add .
//git commit -m "first commit"
//git push

//node --watch server.js

const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 3000; // you can change this

// MongoDB connection URL
const MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase';

// Middleware to parse JSON
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));




const now = new Date();
//console.log(now); // full date + time







// Simple GET API
app.get("/", (req, res) => {
  res.send(`Hello from Node.js API! Current time is:+ ${now}`)
});

// Another example route
app.get("/user", (req, res) => {
  res.json({ name: "Lalit1", role: "Developer" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
