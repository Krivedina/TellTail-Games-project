import { Tags } from '../models/tags';

import { Request, Response } from 'express';

export async function getNameHashTag(req: Request, res: Response) {
    const nameAddressQuery = req.query.name;
    const hashTag: Tags | null = await Tags.findOne({
        where:
            { nameAddress: nameAddressQuery }
    });

    res.json({ arrayHashTags: hashTag });
}
