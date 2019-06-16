import * as Sequelize from 'sequelize';

import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Adventure } from './adventure';
import { AdventureUsers } from './adventuresUsers';

@Table
export class User extends Model<User> {
    @Column(Sequelize.JSON)
    userAvatar!: string;

    @Column(Sequelize.STRING)
    userLogin!: string;

    @Column(Sequelize.STRING)
    userPassword!: string;

    @BelongsToMany(() => Adventure, () => AdventureUsers)
    adventures!: Adventure[];
}
