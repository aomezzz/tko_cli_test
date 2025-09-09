import express from "express";
const router = express.Router();

// POST http://localhost:5000/api/hello
router.post("/hello", authController.register);
