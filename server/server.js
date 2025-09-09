const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.post("/api/hello", (req, res) => {
  const { name, age } = req.body;
  res.status(201).json({ message: "Data received", data: { name, age } });
});

// Routes
app.get("/", (req, res) => {
  res.send("tko test backend");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
