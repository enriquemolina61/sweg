import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private  prisma: PrismaService
    ) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/createUser")
  async createUser(): Promise<any> {
    return await this.prisma.createUser({
      name: "Alice",
      email: "",
    });
  }

  
}
