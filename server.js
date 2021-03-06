// Import and initialize Express
const express = require("express");
const connectDB = require("./config/db");
const path = require('path');
const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")))

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/quotes", require("./routes/quotes"));

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
