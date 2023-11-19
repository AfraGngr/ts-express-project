/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'success',
        message: 'It is a success message',
    });
});

app.use('/api/v1/auth', authRoutes);

app.all('*', (req: Request, res: Response) => {
    res.status(404).end();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    let message: string = 'Something went wrong';
    let statusCode: number = 500;
    let status: string = 'error';

    if (err instanceof Error) {
        message = err.message;
        statusCode = 400;
        status = 'fail';
    }

    /* eslint-disable */
    console.log(message);

    res.status(statusCode).send({ status, message });
});
