import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.config.env' });

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express/Ts Server');
});

app.listen(port, () => {
    /* eslint-disable */
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});