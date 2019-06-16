import * as Sequelize from 'sequelize';
import { AdventureTags } from './adventureTags';
import { Tags } from './tags';

import { BelongsToMany, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { AdventureUsers } from './adventuresUsers';
import { User } from './user';

@Table
export class Adventure extends Model<Adventure> {
    @PrimaryKey
    @Column(Sequelize.INTEGER)
    id!: number;

    @Column(Sequelize.STRING)
    name!: string;

    @Column(Sequelize.STRING)
    description?: string;

    @Column(Sequelize.STRING)
    image?: string;

    @Column(Sequelize.STRING)
    defaultImage!: string;

    @BelongsToMany(() => Tags, () => AdventureTags)
    tags?: Tags[];

    @BelongsToMany(() => User, () => AdventureUsers)
    users?: User[];

    @Column(Sequelize.INTEGER)
    firstSceneNumber?: number;

    @Column(Sequelize.STRING)
    tripName!: string;
}
