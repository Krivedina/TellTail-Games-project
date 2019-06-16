import { parse } from 'url';

import { Application, Request, Response } from 'express';
import { authorizationUser } from './controllers/authorizationUser';
import { createAuthorizationPage } from './controllers/createAuthorizationPage';
import { createRegistrationPage } from './controllers/createRegistrationPage';
import { createUser } from './controllers/createUser';
import { getAdventureJSON } from './controllers/getAdventureJSON';
import { getAllHashTagsJSON } from './controllers/getAllHashTagsJSON';
import { getNameHashTag } from './controllers/getNameHashTag';
import { getSceneJSON } from './controllers/getSceneJSON';
import { getUserData } from './controllers/getUserData';
import { getUserEntryJSON } from './controllers/getUserEntryJSON';
import { logoutUser } from './controllers/logoutUser';

import { getUserJSON } from './controllers/getUserJSON';
import { userCountPass } from './controllers/userCountPass';

export = (app: Application) => {
    app.post('/api/registration', createUser);
    app.post('/api/authorization', authorizationUser);
    app.get('/api/getUserEntry', getUserEntryJSON);
    app.get('/api/scene/:tripName/:sceneNumber', getSceneJSON);
    app.get('/allUsers', getUserJSON);
    app.get('/api/getNameHashTag', getNameHashTag);
    app.get('/api/adventures', getAdventureJSON);
    app.get('/api/hashTag', getAllHashTagsJSON);
    app.get('/api/get-user-data', getUserData);
    app.get('/api/userCountPass', userCountPass);
    app.get('/', (_: Request, res: Response) => res.renderPage('/mainPage'));
    app.get('/tag:name', (_: Request, res: Response) => res.renderPage('/hashTagPage'));
    app.get('/:tripName/:sceneNumber', (_: Request, res: Response) => res.renderPage('/scenePage'));
    app.get('/registration', createRegistrationPage);
    app.get('/authorization', createAuthorizationPage);
    app.get('/logout', logoutUser);
    app.all('*', (req, res) => {
        const handleRequest = req.nextApp.getRequestHandler();
        const parsedUrl = parse(req.url, true);

        return handleRequest(req, res, parsedUrl);
    });
};
