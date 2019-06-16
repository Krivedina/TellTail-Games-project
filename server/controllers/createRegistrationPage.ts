import { Request, Response } from 'express';

export function createRegistrationPage(req: Request, res: Response) {
    if (req.session!.user) {
        res.redirect('/');
    }

    res.renderPage('/registrationPage');
}
