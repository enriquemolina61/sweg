import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto:CreateUserDto): Promise<User> {
    const data:User = {...dto};
    return this.prisma.user.create({data})
  }

  findAll() {
    return this.prisma.user.findMany();

  }

}
