import { fillTableAchievement } from './data/achievement';
import { fillTableAction } from './data/action';
import { fillTableAdventure } from './data/adventure';
import { fillTableAdventureTags } from './data/adventureTags';
import { fillTableScene } from './data/scene';
import { fillTableTags } from './data/tags';

export async function fillTables() {
    await fillTableScene();
    await fillTableAchievement();
    await fillTableAction();
    await fillTableTags();
    await fillTableAdventure();
    await fillTableAdventureTags();
}
