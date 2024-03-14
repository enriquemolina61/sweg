
import { Injectable } from '@nestjs/common';
import { PrismaClient, User, Company, Plant } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;
  user: User;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: { email: string; phoneNumber: string; name: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(userId: string, data: { email?: string; phoneNumber?: string; name?: string }): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async createCompany(data: { name: string; cnpj: string; site: string; ownerId: string }): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  async updateCompany(companyId: string, data: { name?: string; cnpj?: string; site?: string }): Promise<Company> {
    return this.prisma.company.update({
      where: { id: companyId },
      data,
    });
  }

  async getCompanyById(companyId: string): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { id: companyId },
    });
  }

  async createPlant(data: {
    capacity: number;
    contactMethod?: string | null;
    contactPerson?: string | null;
    gridConnectionDate: Date;
    latitude: string;
    longitude: string;
    plantAddress: string;
    plantCode: string;
    plantName: string;
    performance?: number | null;
    enterpriseId: string;
  }): Promise<Plant> {
    // Convertendo a capacidade para número
    const { capacity, ...rest } = data;

    return this.prisma.plant.create({
      data: {
        ...rest,
        capacity,
      }
    });
  }

  async updatePlant(plantId: string, data: { capacity?: number; }): Promise<Plant> {
    return this.prisma.plant.update({
      where: { id: plantId },
      data,
    });
  }

  async getPlantById(plantId: string): Promise<Plant | null> {
    return this.prisma.plant.findUnique({
      where: { id: plantId },
    });
  }

}
