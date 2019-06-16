import { Request, Response } from 'express';

export function logoutUser(req: Request, res: Response) {
    req.session!.cookie.expires = new Date('Tue, 19 Apr 1970 00:00:00 GMT');
    res.redirect('/');
}
