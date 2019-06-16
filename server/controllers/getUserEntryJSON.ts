import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user';

export async function getUserEntryJSON(req: Request, res: Response) {
    const { user } = req.session!;

    if (user) {
        const data = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                userLogin: {
                    [Op.eq]: user
                }
            }
        });

        res.json(data);
    } else {
        res.json('');
    }
}
