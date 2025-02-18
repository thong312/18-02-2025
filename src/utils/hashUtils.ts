import bcrypt from 'bcryptjs';

const hashedPassword = bcrypt.hashSync('OryzaSystem@123', 10);

export const checkPassword = (inputPassword: string): boolean => {
    return bcrypt.compareSync(inputPassword, hashedPassword);
};
