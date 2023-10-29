import { RequestHandler } from 'express';
import { AuthService } from '../services/authServices';

const authService = new AuthService();

export const register: RequestHandler = async (req, res) => {
    const data = await authService.register(req.body);
    res.status(201).send({ status: 'success', data });
};
