import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../infra/database/prisma.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from './user.repository';
import { ConflictException } from '../../shared/exceptions/conflict.exception';
import { NotFoundException } from '../../shared/exceptions/not-found.exception';
import { UserSerialize } from '../serialize/user.serialize';
import { UserResponse } from '../interface/user-response';

export class UserMySqlRepository implements UserRepository {
  private salt = 10;
  private serializerResponse = new UserSerialize();

  constructor(private readonly prisma: PrismaService) {}

  async create(userData: CreateUserDto): Promise<UserResponse> {
    const userExists = await this.findByEmail(userData.email);

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const data = {
      ...userData,
      password: await bcrypt.hash(userData.password, this.salt),
    };

    return this.serializerResponse.dbToResponse(this.prisma.user.create({ data }));
  }

  async findAll(): Promise<UserResponse[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.serializerResponse.dbToResponse(user));
  }

  async findOne(id: number): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.serializerResponse.dbToResponse(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, data: any): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await this.prisma.user.update({ where: { id }, data });
  }
}
