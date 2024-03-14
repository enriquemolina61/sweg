// prisma.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: any) {
    return this.prisma.user.create({ data });
  }

  async updateUser(userId: string, data: any) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async createCompany(data: any) {
    return this.prisma.company.create({ data });
  }

  async updateCompany(companyId: string, data: any) {
    return this.prisma.company.update({
      where: { id: companyId },
      data,
    });
  }

  async getCompanyById(companyId: string) {
    return this.prisma.company.findUnique({
      where: { id: companyId },
    });
  }

  async createPlant(data: any) {
    return this.prisma.plant.create({ data });
  }

  async updatePlant(plantId: string, data: any) {
    return this.prisma.plant.update({
      where: { id: plantId },
      data,
    });
  }

  async getPlantById(plantId: string) {
    return this.prisma.plant.findUnique({
      where: { id: plantId },
    });
  }


}
