const express = require('express')
const { User } = require('../db');
const bcrypt = require('bcrypt')
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body
  try {

    const isUsernameTaken = await User.exists({ username });
    const isEmailTaken = await User.exists({ email });
    if (isUsernameTaken || isEmailTaken) {
      throw new Error('Username or email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })
    const isSaved = await newUser.save();
    if (isSaved) return res.status(201).json({ message: 'created user sucessfully', isSaved })

  } catch (error) {
    res.status(400).json({
      message: `error creating user`,
      error: error.message || 'Unknown error'
    })
  }
})


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailExists = await User.findOne({ email }).exec();
    if (isEmailExists) {
      bcrypt.compare(password, isEmailExists.password, function (err, result) {
        if (result) res.status(200).json({ message: "Logged in sucessfully" })
        else res.status(401).json({ error: 'password not matches' })
      });
    }
  } catch (error) {
    res.status(401).json({
      message: `error while login`,
      error: error.message || 'Unknown error'
    })
  }
})

module.exports = router;