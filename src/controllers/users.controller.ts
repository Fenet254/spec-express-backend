import { Request, Response } from 'express';
import { User, CreateUserRequest, UpdateUserRequest } from '../types';

let users: User[] = [];

const getAllUsers = (req: Request, res: Response): void => {
  res.json(users);
};

const getUserById = (req: Request, res: Response): void => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json(user);
};

const createUser = (req: Request<{}, {}, CreateUserRequest>, res: Response): void => {
  if (!req.body.name) {
    res.status(400).json({ message: 'Name is required' });
    return;
  }

  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email || '',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req: Request<{ id: string }, {}, UpdateUserRequest>, res: Response): void => {
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

const deleteUser = (req: Request, res: Response): void => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully', user: deletedUser[0] });
};

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
