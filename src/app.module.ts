import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './company/company.module';
import { PlantModule } from './plant/plant.module';

@Module({
  imports: [UserModule, PrismaModule, CompanyModule, PlantModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
