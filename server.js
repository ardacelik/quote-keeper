// Import and initialize Express
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Quote Keeper API..." })
);

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/quotes", require("./routes/quotes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
