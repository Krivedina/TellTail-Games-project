import * as Sequelize from 'sequelize';
import { Adventure } from './adventure';
import { User } from './user';

import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class AdventureUsers extends Model<AdventureUsers> {
    @ForeignKey(() => Adventure)
    @Column(Sequelize.INTEGER)
    adventureId!: number;

    @ForeignKey(() => User)
    @Column(Sequelize.INTEGER)
    userId!: number;

    @Column(Sequelize.INTEGER)
    passCount!: number;
}
