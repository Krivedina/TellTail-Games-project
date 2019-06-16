import { Sequelize } from 'sequelize-typescript';

// Import config from 'config';

// export const sequelize = new Sequelize(config.get('dbUri'), {logging: false});
export const sequelize =
    new Sequelize('postgres://odercjwv:5DxG-xRIbWgoqE0WIuX9kcya49j5U1Tg@balarama.db.elephantsql.com:5432/odercjwv',
        { logging: false });
