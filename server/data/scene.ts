import { Scene } from '../models/scene';

export async function fillTableScene() {
    await Scene.bulkCreate([
        {
            description: 'Дракон вдалеке - что делать?',
            id: 1,
            image: 'dragon2.jpg',
            sceneNumber: 1,
            textPosition: 1,
            tripName: 'thePathOfDragon'
        },
        {
            description: 'Ура, мы дошли!',
            id: 2,
            image: 'dragonEnd.jpg',
            sceneNumber: 2,
            textPosition: 3,
            tripName: 'thePathOfDragon'
        },
        {
            description: 'Мы дома и не дошли до дракона',
            id: 3,
            image: 'dragon3.jpg',
            sceneNumber: 3,
            textPosition: 2,
            tripName: 'thePathOfDragon'
        },
        {
            description: 'Нам нужно сходить за кофе, пойдем?',
            id: 4,
            image: 'coffee1.jpg',
            sceneNumber: 1,
            textPosition: 3,
            tripName: 'coffeeTrip'
        },
        {
            description: 'Круто! У нас есть чашка кофе!',
            id: 5,
            image: 'coffeeEnd.jpg',
            sceneNumber: 2,
            textPosition: 3,
            tripName: 'coffeeTrip'
        },
        {
            description: 'Описание без картинки слева вверху и много текста много текста ' +
            'много текста много текста много текста много текста много текста ',
            id: 6,
            sceneNumber: 1,
            tripName: 'defaultAdventure'
        },
        {
            id: 7,
            image: 'default1.jpg',
            sceneNumber: 2,
            textPosition: 2,
            tripName: 'defaultAdventure'
        }
    ]);
}
