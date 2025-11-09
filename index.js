//git remote add origin https://github.com/wanilalits/NodeJs_09-11-2025.git
//git branch -M main
//git push -u origin main


//node --watch server.js
const express = require("express");
const app = express();
const PORT = 3000; // you can change this

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