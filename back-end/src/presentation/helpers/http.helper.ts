import { ServerError } from '../errors/server.error copy';
import { HttpResponse } from '../protocols/http';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export const success = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});
