import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePlantDto } from "./dto/create-plant.dto";
import { Plant } from "./entities/plant.entity";
import { UpdatePlantPerformanceDto } from "./dto/update-plant-performance.dto";

@Injectable()
export class PlantService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    const { enterpriseId, ...plantData } = createPlantDto;

    return this.prisma.plant.create({
      data: {
        ...plantData,
        enterpriseId,
      },
    });
  }

  async findPlantsByCompany(companyId: string): Promise<Plant[]> {
    return this.prisma.plant.findMany({
      where: {
        enterpriseId: companyId,
      },
    });
  }

  async sumPlantsByCompany(companyId: string): Promise<number> {
    const plants = await this.findPlantsByCompany(companyId);
    return plants.length;
  }

  async sumCapacityByCompany(): Promise<number[]> {
    const companies = await this.prisma.company.findMany();
    const sumCapacities = await Promise.all(
      companies.map(async (company) => {
        const plants = await this.findPlantsByCompany(company.id);
        return plants.reduce((acc, plant) => acc + plant.capacity, 0);
      }),
    );
    return sumCapacities;
  }

  async sumCapacityByCompanyId(companyId: string): Promise<number> {
    const plants = await this.findPlantsByCompany(companyId);
    const sumCapacity = plants.reduce((acc, plant) => acc + plant.capacity, 0);
    return sumCapacity;
}

  async updatePerformance(
    id: string,
    updatePerformance: UpdatePlantPerformanceDto,
  ): Promise<Plant> {
    const data = updatePerformance;
    return this.prisma.plant.update({
      where: { id },
      data,
    });
  }
}
