import { Injectable } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { Company } from "./entities/company.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const { ownerId, ...dataCompany } = createCompanyDto;
    const data: Prisma.CompanyCreateInput = {
      ...dataCompany,
      owner: { connect: { id: ownerId } },
    };

    return this.prisma.company.create({ data });
  }

  async findAll(): Promise<Company[]> {
    return await this.prisma.company.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.company.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }

    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: string, ownerId: string): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }

    if (company.ownerId !== ownerId) {
      throw new Error(`Only the owner can delete the company`);
    }

    return this.prisma.company.delete({
      where: { id },
    });
  }

  async updatePerformance(
    id: string,
    performance: number,
    ownerId: string,
  ): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }

    if (company.ownerId !== ownerId) {
      throw new Error(`Only the owner can update the performance`);
    }

    return this.prisma.company.update({
      where: { id },
      data: { performance },
    });

  }

  async updateInfo(
    id: string,
  UpdateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }
    return this.prisma.company.update({
      where: { id },
      data:  UpdateCompanyDto,
    });
  }


}
