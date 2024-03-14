import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private  prisma: PrismaService
    ) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }



}
