import * as Sequelize from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Scene } from './scene';

@Table
export class Action extends Model<Action> {
    @PrimaryKey
    @Column(Sequelize.INTEGER)
    id!: number;

    @Column(Sequelize.STRING)
    name!: string;

    @Column(Sequelize.INTEGER)
    nextSceneNumber!: number;

    @Column(Sequelize.STRING)
    tripName!: string;

    @ForeignKey(() => Scene)
    @Column(Sequelize.INTEGER)
    sceneId!: number;

    @BelongsTo(() => Scene)
    scene!: Scene;
}
