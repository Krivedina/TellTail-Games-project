import { Request, Response } from 'express';

import { User } from '../models/user';

export async function getUserData(req: Request, res: Response) {
    const { login } = req.session!;

    if (login) {
        const data = await User.findOne({
            attributes: { exclude: ['password'] },
            where: { login }
        });

        res.json(data);
    } else {
        res.sendStatus(400);
    }
}
