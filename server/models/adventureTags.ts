import * as Sequelize from 'sequelize';
import { Adventure } from './adventure';
import { Tags } from './tags';

import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class AdventureTags extends Model<AdventureTags> {
    @ForeignKey(() => Adventure)
    @Column(Sequelize.INTEGER)
    adventureId!: number;

    @ForeignKey(() => Tags)
    @Column(Sequelize.INTEGER)
    tagsId!: number;
}
