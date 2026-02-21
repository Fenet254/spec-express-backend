"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
let users = [];
const getAllUsers = (req, res) => {
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.json(user);
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: 'Name is required' });
        return;
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
exports.createUser = createUser;
const updateUser = (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    if (!req.body.name) {
        res.status(400).json({ message: 'Name is required' });
        return;
    }
    user.name = req.body.name;
    if (req.body.email) {
        user.email = req.body.email;
    }
    res.json(user);
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully', user: deletedUser[0] });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map