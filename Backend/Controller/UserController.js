const User = require('../model/UserModel');

async function createUserHandler(req, res) {
  try {
    const { username, password } = req.body;

    // Create a new user record in the database
    const newUser = await User.create({
      username: username,
      password: password
    });

    // If creation is successful, return the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    // If an error occurs, handle it appropriately
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

module.exports = { createUserHandler };
