import { fillTables } from './fillTables';

import routes from './route';

import * as bodyParser from 'body-parser';
import * as path from 'path';

import config from 'config';
import express, { NextFunction, Request, Response } from 'express';
import nextjs from 'next';

import { AdventureUsers } from './models/adventuresUsers';

import { Achievement } from 'models/achievement';
import { Action } from 'models/action';
import { Adventure } from 'models/adventure';
import { AdventureTags } from 'models/adventureTags';
import { Scene } from 'models/scene';
import { Tags } from 'models/tags';
import { User } from './models/user';

import { sequelize } from './createSequelizeObject';

import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import render from 'middlewares/render';
import commonData from './middlewares/common-data';

sequelize.addModels([Achievement, Action, Adventure, AdventureTags, AdventureUsers, Scene, Tags, User]);
sequelize.sync({ force: true }).then(fillTables);

const app = express();

const nextApp = nextjs({ dev: process.env.NODE_ENV !== 'production' });
const publicDir = path.join(__dirname, 'public');
const days = 60 * 60 * 1000 * 24;
const expiryDate = new Date(Date.now() + days);

app.use(cookieParser());
app.use(expressSession({
    cookie: {
        expires: expiryDate,
        path: '/'
    },
    resave: false,
    saveUninitialized: true,
    secret: 'secret key'
}));
app.use(render(nextApp));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(commonData);
app.use(express.static(publicDir));
routes(app);

app.use((err: Error, _req: Request, res: Response, _: NextFunction) => {
    console.error(err.stack);

    res.sendStatus(500);
});

nextApp.prepare().then(() => {
    const port = config.get('port');

    app.listen(port, () => {
        console.info(`Server started on ${port}`);
        console.info(`Open http://localhost:${port}/`);
    });
});
