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

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company with ${JSON.stringify(
      updateCompanyDto,
    )}
      `;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
