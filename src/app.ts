import express, { Express, Request, Response } from 'express';
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
