import { Adventure } from '../models/adventure';

import { Tags } from '../models/tags';

import { Request, Response } from 'express';

import { Op } from 'sequelize';
import { User } from '../models/user';

export async function getAdventureJSON(req: Request, res: Response) {
    const { search, tagsElements, offset: offsetFromStart, limit: limitBound } = req.query;
    const localParameters = res.locals;
    let tagsElementsArray = [];

    const arrayHashTags: Tags[] = await Tags.findAll();
    let arrayAdventures: Adventure[] = await Adventure.findAll({
        include: [{ model: Tags }, { model: User }],
        limit: limitBound,
        offset: offsetFromStart,
        order: [['id', 'ASC']],
        where: {
            firstSceneNumber: {
                [Op.ne]: null
            }
        }
    });

    if (tagsElements) {
        if (tagsElements[0].indexOf('#') >= 0) {
            const tagName = tagsElements.slice(1);

            arrayAdventures = arrayAdventures
                .filter((adventure) => {
                    if (adventure.tags) {
                        return adventure.tags
                            .map((tagElement) => (tagElement.nameAddress === tagName) ||
                                (tagElement.name === tagName))
                            .some((tagExist) => tagExist);
                    }

                    return adventure;
                });
        } else {
            tagsElementsArray = tagsElements.split(',');
        }
    }

    if (search.length > 0 || tagsElementsArray.length > 0) {
        if (!(tagsElementsArray.length > 0)) {
            tagsElementsArray = arrayHashTags.map((el) => el.name);
        }

        arrayAdventures = await Adventure.findAll({
            include: [{
                model: Tags,
                where: {
                    name: {
                        [Op.in]: tagsElementsArray
                    }
                }
            }, { model: User }],
            limit: limitBound,
            offset: offsetFromStart,
            order: [['id', 'ASC']],
            where: {
                [Op.or]: {
                    description: {
                        [Op.iLike]: '%' + search + '%'
                    },
                    name: {
                        [Op.iLike]: '%' + search + '%'
                    }
                },
                firstSceneNumber: {
                    [Op.ne]: null
                }
            }
        });
    }

    res.json({ arrayAdventures, localParameters });
}
