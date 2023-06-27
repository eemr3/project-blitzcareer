import { Request, Response } from 'express';
import { UserService } from './user.service';
import { ConflictException } from '../shared/exceptions/conflict.exception';
import { CreateUserDto } from './dtos/create-user.dto';

export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    const data: CreateUserDto = req.body;
    try {
      const newUser = await this.userService.create(data);
      return res.status(201).json(newUser);
    } catch (err) {
      const error = err as Error;

      if (err instanceof ConflictException) {
        return res.status(409).json({
          statusCode: 409,
          message: error.message,
          error: 'Conflict',
        });
      }

      return res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }
}
