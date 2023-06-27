import express, { Application } from 'express';
import { PrismaService } from '../../../infra/database/prisma.service';
import { UserMySqlRepository } from '../../repositories/user-mysql.repository';
import { UserController } from '../../user.controller';
import { UserService } from '../../user.service';

class UserRouter {
  public routes: Application = express();
  private prisma = new PrismaService();
  private repository = new UserMySqlRepository(this.prisma);
  private service = new UserService(this.repository);
  private controller = new UserController(this.service);

  constructor() {
    this.createNewUser();
  }

  createNewUser() {
    this.routes.post('/users', this.controller.createUser.bind(this.controller));
  }
}

export default new UserRouter().routes;
