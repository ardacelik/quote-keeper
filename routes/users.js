const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  // Validation with express-validator
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Show the error if something goes wrong (user will not see this!)
    }

    const { name, email, password } = req.body;

    try {
      // Check if the an email address is already used to register a user
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create the user based on the user schema
      user = new User({
        name,
        email,
        password
      });

      // Hash the password with bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

      // To get the info related to the logged in user, we need the user's id
      const payload = {
        user: {
          id: user.id
        }
      };

      // Generate a token with JWT
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000 // token expires in 360000 seconds
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
