import { Action } from '../models/action';

export async function fillTableAction() {
    await Action.bulkCreate([
        {
            id: 1,
            name: 'Идти дальше',
            nextSceneNumber: 2,
            sceneId: 1,
            tripName: 'thePathOfDragon'
        },
        {
            id: 2,
            name: 'Пройти путь заново',
            nextSceneNumber: 1,
            sceneId: 2,
            tripName: 'thePathOfDragon'
        },
        {
            id: 3,
            name: 'Убежать домой',
            nextSceneNumber: 3,
            sceneId: 1,
            tripName: 'thePathOfDragon'
        },
        {
            id: 4,
            name: 'Пойти снова',
            nextSceneNumber: 1,
            sceneId: 3,
            tripName: 'thePathOfDragon'
        },
        {
            id: 5,
            name: 'Пойти за кофе',
            nextSceneNumber: 2,
            sceneId: 4,
            tripName: 'coffeeTrip'
        },
        {
            id: 6,
            name: 'Сходить снова',
            nextSceneNumber: 1,
            sceneId: 5,
            tripName: 'coffeeTrip'
        },
        {
            id: 7,
            name: 'Дефолтный шаг 1',
            nextSceneNumber: 2,
            sceneId: 6,
            tripName: 'defaultAdventure'
        },
        {
            id: 8,
            name: 'Дефолтный шаг 2',
            nextSceneNumber: 1,
            sceneId: 7,
            tripName: 'defaultAdventure'
        }
    ]);
}
