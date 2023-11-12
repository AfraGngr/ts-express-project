import prisma from '../../utils/client';

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

        await prisma.user.create({
            data: {
                firstName,
                lastName,
                password,
                email,
                roleId: 1,
            },
        });

        return [];
    };
}
