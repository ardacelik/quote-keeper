const express = require("express");
const router = express.Router();

// @route   GET api/quotes
// @desc    Get user's all quotes
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all quotes");
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
