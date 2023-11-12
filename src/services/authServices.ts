import prisma from '../utils/client';
import bcrypt from 'bcrypt';

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export class AuthService {
    constructor() {}

    public register = async (data: UserData): Promise<[]> => {
        const { firstName, lastName, password, email } = data;

        const hashedPassword = bcrypt.hashSync(password, 10);

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
