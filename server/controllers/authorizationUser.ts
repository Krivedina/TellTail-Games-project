import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user';
import { getHashPassword } from './getHashPassword';

export async function authorizationUser(req: Request, res: Response) {
    const { login, password } = req.body;
    const hashPassword = getHashPassword(password);
    const loginUser: User | null = await User.findOne({
        where: {
            [Op.and]: {
                userLogin: {
                    [Op.eq]: login
                },
                userPassword: {
                    [Op.eq]: hashPassword
                }
            }
        }
    });

    if (loginUser) {
        req.session!.user = loginUser.userLogin;
        res.sendStatus(200);
    } else {
        res.status(409).send('Неправильный логин или пароль');
    }
}
