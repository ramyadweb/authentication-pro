const User = require('../models/userModel');

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = async (req, res) => {
  // Use id instead of _id for MySQL
  const user = await User.findByPk(req.user.id);

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

module.exports = {
  getUserProfile,
};
