import { Request, Response, NextFunction, RequestHandler } from 'express';
import { z } from 'zod';

export const validateBodyMiddleware = (schema: z.ZodSchema): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (err: unknown) {
            if (err instanceof z.ZodError) {
                next(new Error(err.issues[0].message));
            }
        }
    };
};
