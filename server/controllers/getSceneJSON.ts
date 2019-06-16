import { Achievement } from '../models/achievement';

import { Action } from '../models/action';
import { Scene } from '../models/scene';

import { Request, Response } from 'express';

export async function getSceneJSON(req: Request, res: Response) {
    const { tripName: trip, sceneNumber: sceneN } = req.params;
    const scene = await Scene.findOne({
        include: [
            { model: Achievement },
            { model: Action }
        ],
        where: {
            sceneNumber: sceneN,
            tripName: trip
        }
    });

    if (scene) {
        res.json({ scene });
    } else {
        res.sendStatus(404);
    }
}
