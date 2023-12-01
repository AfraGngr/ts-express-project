import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const roleArray = [
    {
        name: 'Admin',
        code: 'O9NbejJr',
    },
    {
        name: 'Editor',
        code: 'UoD8YptY',
    },
    {
        name: 'Author',
        code: 'qFuyEyeG',
    },
    {
        name: 'Subscriber',
        code: '3cl4efPU',
    },
    {
        name: 'Guest',
        code: '22V5wLeG',
    },
];

async function insertRoles(arr: { name: string; code: string }[]) {
    await Promise.all(
        arr.map(async (obj) => {
            await prisma.role.upsert({
                where: { code: obj.code },
                update: {},
                create: {
                    name: obj.name,
                    code: obj.code,
                },
            });
        }),
    );
}

insertRoles(roleArray);
