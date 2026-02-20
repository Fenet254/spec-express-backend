// In-memory storage for users
let users = [];

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Create a new user
const createUser = (req, res) => {
  // Validation: Name is required
  if (!req.body.name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email || '',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user
const updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Validation: Name is required for update
  if (!req.body.name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  user.name = req.body.name;
  if (req.body.email) {
    user.email = req.body.email;
  }

  res.json(user);
};

// Delete a user
const deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully', user: deletedUser[0] });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
