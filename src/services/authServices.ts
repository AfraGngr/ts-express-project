import prisma from '../utils/client';
import bcrypt from 'bcrypt';
import { TRegisterRequest } from '../utils/schemas';

export class AuthService {
    constructor() {}

    public register = async (data: TRegisterRequest): Promise<[]> => {
        const { firstName, lastName, password, email } = data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const isExist = await prisma.user.findUnique({ where: { email } });
        if (isExist) throw new Error('This user is already registered.');

        await prisma.user.create({
            data: {
                firstName,
                lastName,
                password: hashedPassword,
                email,
                roleId: 5,
            },
        });

        return [];
    };
}
