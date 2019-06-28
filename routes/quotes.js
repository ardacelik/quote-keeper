const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Quote = require("../models/Quote");

// @route   GET api/quotes
// @desc    Get user's all quotes
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const quotes = await Quote.find({ user: req.user.id }).sort({ date: -1 }); // -1 means "most recent quote appears first"
    res.json(quotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/quotes
// @desc    Add new quotes
// @access  Private
router.post("/", (req, res) => {
  res.send("Add quote");
});

// @route   PUT api/auotes/:id
// @desc    Update quote
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update quote");
});

// @route   DELETE api/quotes/:id
// @desc    Delete quote
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete quote");
});

module.exports = router;
