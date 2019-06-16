import { Achievement } from '../models/achievement';

export async function fillTableAchievement() {
    await Achievement.bulkCreate([
        {
            id: 1,
            image: 'dragonAchievement.jpg',
            name: 'Путник',
            sceneId: 2
        },
        {
            id: 2,
            image: 'coffeeAchievement.jpg',
            name: 'Кофе - круто!',
            sceneId: 5
        },
        {
            id: 3,
            image: 'defaultAchievement1.jpg',
            name: 'Дефолтная ачивка 1',
            sceneId: 7
        },
        {
            id: 4,
            image: 'defaultAchievement2.jpg',
            name: 'Дефолтная ачивка 2',
            sceneId: 7
        }
    ]);
}
