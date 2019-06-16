import { Request, Response } from 'express';
import { User } from '../models/user';

import { getHashPassword } from './getHashPassword';

import { Op } from 'sequelize';

export async function createUser(req: Request, res: Response) {
    const { login, password, avatar } = req.body;
    const hashPassword = getHashPassword(password);
    const checkUserExist = await User.findOne({
        where: {
            userLogin: {
                [Op.eq]: login
            }
        }
    });

    if (checkUserExist) {
        res.status(409).send('Пользователь с таким именем уже существует!');
    }

    const user = new User({ userLogin: login, userPassword: hashPassword, userAvatar: avatar });

    await user.save();
    req.session!.user = login;
    res.sendStatus(200);
}
