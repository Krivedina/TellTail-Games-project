import { AdventureUsers } from '../models/adventuresUsers';

import { Request } from 'express';
import { Op } from 'sequelize';
import { Adventure } from '../models/adventure';
import { User } from '../models/user';

export async function userCountPass(req: Request) {
    const userName = req.session!.user;
    console.info('hello!');
    if (userName) {
        const { adventureName } = req.query;
        const currentAdventure = await Adventure.findOne({
            where: {
                tripName: {
                    [Op.eq]: adventureName
                }
            }
        });
        const currentUser = await User.findOne({
            where: {
                userLogin: {
                    [Op.eq]: userName
                }
            }
        });
        const checkRecord = await AdventureUsers.findOne({
            where: {
                adventureId: currentAdventure!.id,
                userId: currentUser!.id
            }
        });

        if (!checkRecord) {
            const recordAdventure = new AdventureUsers({
                adventureId: currentAdventure!.id,
                passCount: 1,
                userId: currentUser!.id
            });

            await recordAdventure.save();
        } else {
            await checkRecord.increment('passCount');
        }
    }
}
