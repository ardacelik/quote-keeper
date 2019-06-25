// Import and initialize Express
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Quote Keeper API..." })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
