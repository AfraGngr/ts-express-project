import { Router } from 'express';
import { register } from '../controllers/authController';
import { validateBodyMiddleware } from '../middlewares/validateMiddleware';
import { registerSchema } from '../../utils/schemas';

const router = Router();

router.post('/register', validateBodyMiddleware(registerSchema), register);

export { router as authRoutes };
