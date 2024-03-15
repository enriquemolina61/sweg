import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  create(createCompanyDto: CreateCompanyDto) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}
  // create(createCompanyDto: CreateCompanyDto):Promise<Company> {
  //   const data:Company = {...createCompanyDto, userId};

  //   return this.prisma.company.create({data})
  // }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
