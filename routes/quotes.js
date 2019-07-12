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
router.post(
  "/",
  [
    auth,
    [
      check("text", "Quote is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Show the error if something goes wrong (user will not see this!)
    }

    const { text, author } = req.body;

    try {
      const newQuote = new Quote({
        text,
        author,
        user: req.user.id
      });

      const favouriteQuote = await newQuote.save(); // Save quote to the database

      res.json(favouriteQuote);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/auotes/:id
// @desc    Update quote
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { text, author, date } = req.body;

  // Build quote object
  const quoteFields = {};
  if (text) quoteFields.text = text;
  if (author) quoteFields.author = author;
  if (date) quoteFields.date = date;

  try {
    let quote = await Quote.findById(req.params.id);

    if (!quote) return res.status(404).json({ msg: "Quote not found" });

    // Make sure user owns quote
    if (quote.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { $set: quoteFields },
      { new: true }
    );

    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/quotes/:id
// @desc    Delete quote
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let quote = await Quote.findById(req.params.id);

    if (!quote) return res.status(404).json({ msg: "Quote not found" });

    // Make sure user owns quote
    if (quote.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Quote.findByIdAndRemove(req.params.id);

    res.json({ msg: "Quote removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
