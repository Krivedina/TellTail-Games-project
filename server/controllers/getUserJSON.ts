import { User } from '../models/user';

export async function getUserJSON() {
    const allUser: User[] = await User.findAll();

    console.table(allUser);
}
