import * as Sequelize from 'sequelize';

import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Scene } from './scene';

@Table
export class Achievement extends Model<Achievement> {
    @PrimaryKey
    @Column(Sequelize.INTEGER)
    id!: number;

    @Column(Sequelize.STRING)
    name!: string;

    @Column(Sequelize.STRING)
    image!: string;

    @ForeignKey(() => Scene)
    @Column(Sequelize.INTEGER)
    sceneId!: number;

    @BelongsTo(() => Scene)
    scene!: Scene;
}
