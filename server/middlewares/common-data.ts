import config from 'config';
import { NextFunction as Next, Request, Response } from 'express';

export default (_req: Request, res: Response, next: Next) => {
    res.locals.charset = 'UTF-8';
    res.locals.title = 'Telltail';
    res.locals.staticBasePath = config.get('staticBasePath');
    next();
};
