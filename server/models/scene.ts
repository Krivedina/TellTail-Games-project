import { Achievement } from './achievement';
import { Action } from './action';

import * as Sequelize from 'sequelize';

import { Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Scene extends Model<Scene> {
    @PrimaryKey
    @Column(Sequelize.INTEGER)
    id!: number;

    @Column(Sequelize.STRING)
    description?: string;

    @Column(Sequelize.STRING)
    image?: string;

    @Column(Sequelize.STRING)
    tripName!: string;

    @Column(Sequelize.INTEGER)
    textPosition?: number;

    @Column(Sequelize.INTEGER)
    sceneNumber!: number;

    @HasMany(() => Achievement)
    achievement?: Achievement[];

    @HasMany(() => Action)
    action!: Action[];
}
