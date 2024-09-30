// server.js
const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

// Serve static files from the 'public' directory

// API endpoint to get environment variables
app.get("/api/config", (req, res) => {
  res.json({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  });
});

// Root route (you can also serve an HTML file here)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Serve your HTML file
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
