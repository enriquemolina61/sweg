import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  users: User[] = [];
  constructor(private readonly prisma: PrismaService) {}

  create(dto:CreateUserDto): Promise<User> {
    const data:User = {...dto};
    return this.prisma.user.create({data})
  }

  findAll() {
    return this.prisma.user.findMany();

  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
