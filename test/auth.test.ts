import request from 'supertest';
import { server } from '../src/index';
import { app } from '../src/app';
import prisma from '../src/utils/client';

const req = request(app);
interface IUserInfo {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IRole {
    id?: number;
    name: string;
    code: string;
}

const roleData: IRole = {
    id: 5,
    name: 'Guest',
    code: 'roleCode',
};

const userData: IUserInfo = {
    firstName: 'Afra',
    lastName: 'Güngör',
    email: 'afra.development@gmail.com',
    password: 'Afra123!',
    confirmPassword: 'Afra123!',
};

beforeAll(async () => {
    await prisma.role.create({ data: roleData });
});

describe('Authentication tests', () => {
    describe('Register route', () => {
        it('should return 400 when required parameters are not provided', async () => {
            await req
                .post(`/api/v1/auth/register`)
                .send({
                    firstName: userData.firstName,
                    password: userData.password,
                    confirmPassword: userData.confirmPassword,
                })
                .expect(400);
        });

        it('sould return 201', async () => {
            await req.post(`/api/v1/auth/register`).send(userData).expect(201);
        });

        it('should return 400 if user already exist.', async () => {
            const res = await req
                .post(`/api/v1/auth/register`)
                .send({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    password: userData.password,
                    confirmPassword: userData.confirmPassword,
                })
                .expect(400);

            expect(res.body.message).toBe('This user is already registered.');
        });
    });
});

afterAll(async () => {
    server.close();
    await prisma.user.delete({ where: { email: userData.email } });
    await prisma.$disconnect();
});
