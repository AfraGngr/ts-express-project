/* eslint-disable @typescript-eslint/no-unused-vars */
import dotenv from 'dotenv';
import { Server } from 'http';
import prisma from './utils/client';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;

import { app } from './app';
export const server: Server = app.listen(port, () => {
    /* eslint-disable */
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
