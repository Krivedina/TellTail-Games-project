import { Adventure } from '../models/adventure';

export async function fillTableAdventure() {
    await Adventure.bulkCreate([
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Пойдем по пути дракона?',
            firstSceneNumber: 1,
            id: 1,
            image: 'dragon.jpg',
            name: 'Путь Дракона',
            tripName: 'thePathOfDragon'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Кофе - круто!',
            firstSceneNumber: 1,
            id: 2,
            image: 'cofe.jpeg',
            name: 'Поход за кофе',
            tripName: 'coffeeTrip'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Дефолтная картинка',
            firstSceneNumber: 1,
            id: 3,
            name: 'Дефолтное приключение',
            tripName: 'defaultAdventure'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 4,
            name: 'Тестовое приключение №1',
            tripName: 'testAdventure1'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 5,
            name: 'Тестовое приключение №2',
            tripName: 'testAdventure2'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 6,
            name: 'Тестовое приключение №3',
            tripName: 'testAdventure3'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 7,
            name: 'Тестовое приключение №4',
            tripName: 'testAdventure4'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 8,
            name: 'Тестовое приключение №5',
            tripName: 'testAdventure5'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 9,
            name: 'Тестовое приключение №6',
            tripName: 'testAdventure6'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 10,
            name: 'Тестовое приключение №7',
            tripName: 'testAdventure7'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 11,
            name: 'Тестовое приключение №8',
            tripName: 'testAdventure8'
        },
        {
            defaultImage: 'adventureDefault.jpg',
            description: 'Тест',
            firstSceneNumber: 1,
            id: 12,
            name: 'Тестовое приключение №9',
            tripName: 'testAdventure9'
        }
    ]);
}
