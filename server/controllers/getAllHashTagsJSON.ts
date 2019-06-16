import { Tags } from '../models/tags';

import { Request, Response } from 'express';

export async function getAllHashTagsJSON(_: Request, res: Response) {
    const arrayHashTags: Tags[] = await Tags.findAll();

    res.json({ arrayHashTags });
}
