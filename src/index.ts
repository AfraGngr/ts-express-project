import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Server } from 'http';

dotenv.config({ path: './.config.env' });

export const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express/Ts Server');
});

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'success',
        message: 'It is a success message',
    });
});
export const server: Server = app.listen(port, () => {
    /* eslint-disable */
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
