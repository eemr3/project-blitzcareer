import { Request, Response } from 'express';
import { Controller, HttpRequest } from '../../presentation/protocols';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequst: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequst);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
