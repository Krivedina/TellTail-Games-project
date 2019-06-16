import * as Sequelize from 'sequelize';
import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Adventure } from './adventure';
import { AdventureTags } from './adventureTags';

@Table
export class Tags extends Model<Tags> {
    @Column(Sequelize.STRING)
    name!: string;

    @Column(Sequelize.STRING)
    nameAddress!: string;

    @BelongsToMany(() => Adventure, () => AdventureTags)
    adventures!: Adventure[];
}
