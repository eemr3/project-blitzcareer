import express, { Application } from 'express';
import { PrismaService } from '../../../infra/database/prisma.service';
import { UserMySqlRepository } from '../../repositories/user-mysql.repository';
import { UserController } from '../../user.controller';
import { UserService } from '../../user.service';
import { validationMiddleware } from '../../middleware/validation.middleware';
import { CreateUserDto } from '../../dtos/create-user.dto';

export class UserRouter {
  public routes: Application = express();
  private prisma = new PrismaService();
  private repository = new UserMySqlRepository(this.prisma);
  private service = new UserService(this.repository);
  private controller = new UserController(this.service);

  constructor() {
    this.createNewUser();
  }

  createNewUser() {
    this.routes.post(
      '/users',
      validationMiddleware(CreateUserDto),
      this.controller.createUser.bind(this.controller),
    );
  }
}
