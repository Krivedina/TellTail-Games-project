import { Tags } from '../models/tags';

export async function fillTableTags() {
    await Tags.bulkCreate([
        {
            name: 'магия',
            nameAddress: 'Magic'
        },
        {
            name: 'приключение',
            nameAddress: 'Adventure'
        },
        {
            name: 'пустота',
            nameAddress: 'Empty'
        },
        {
            name: 'мистика',
            nameAddress: 'Mystic'
        }
    ]);
}
