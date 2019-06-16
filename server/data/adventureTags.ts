import { AdventureTags } from '../models/adventureTags';

export async function fillTableAdventureTags() {
    await AdventureTags.bulkCreate([
        {
            adventureId: 1,
            tagsId: 1
        },
        {
            adventureId: 1,
            tagsId: 2
        },
        {
            adventureId: 2,
            tagsId: 1
        },
        {
            adventureId: 3,
            tagsId: 3
        },
        {
            adventureId: 4,
            tagsId: 3
        },
        {
            adventureId: 5,
            tagsId: 3
        },
        {
            adventureId: 6,
            tagsId: 3
        },
        {
            adventureId: 7,
            tagsId: 3
        },
        {
            adventureId: 8,
            tagsId: 3
        },
        {
            adventureId: 9,
            tagsId: 3
        },
        {
            adventureId: 10,
            tagsId: 3
        },
        {
            adventureId: 1,
            tagsId: 4
        },
        {
            adventureId: 7,
            tagsId: 4
        }
    ]);
}
