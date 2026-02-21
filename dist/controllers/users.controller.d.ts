import { Request, Response } from 'express';
import { CreateUserRequest, UpdateUserRequest } from '../types';
declare const getAllUsers: (req: Request, res: Response) => void;
declare const getUserById: (req: Request, res: Response) => void;
declare const createUser: (req: Request<{}, {}, CreateUserRequest>, res: Response) => void;
declare const updateUser: (req: Request<{
    id: string;
}, {}, UpdateUserRequest>, res: Response) => void;
declare const deleteUser: (req: Request, res: Response) => void;
export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
//# sourceMappingURL=users.controller.d.ts.map