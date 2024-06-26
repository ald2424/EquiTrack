const express = require("express");
const connectDB = require("./config/database");

// Load environment variables
require("dotenv").config({ path: "./config/.env" });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic Route for testing
app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
