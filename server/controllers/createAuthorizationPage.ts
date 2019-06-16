import { Request, Response } from 'express';

export function createAuthorizationPage(req: Request, res: Response) {
    if (req.session!.user) {
        res.redirect('/');
    }

    res.renderPage('/authorizationPage');
}
