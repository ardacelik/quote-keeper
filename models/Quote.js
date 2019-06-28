const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("quote", QuoteSchema);
