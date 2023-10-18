import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

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

app.listen(port, () => {
    /* eslint-disable */
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
