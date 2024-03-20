import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { ApiTags } from "@nestjs/swagger";
import { exceptionsFilter } from "src/helpers/exceptions.helper";

@ApiTags("Company")
@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companyService.create(createCompanyDto);
    } catch (error) {
      exceptionsFilter(error);
    }
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    try {
      const updatedCompany = await this.companyService.update(
        id,
        updateCompanyDto,
      );

      if ("performance" in updateCompanyDto) {
        await this.companyService.updatePerformance(
          id,
          updateCompanyDto.performance,
          updateCompanyDto.ownerId,
        );
      }
      return updatedCompany;
    } catch (error) {
      exceptionsFilter(error);
    }
  }

  @Delete(":id/:ownerId")
  async remove(@Param("id") id: string, @Param("ownerId") ownerId: string) {
    try {
      // Verificar se o ownerId fornecido é válido
      const company = await this.companyService.findOne(id);
      if (!company) {
        throw new Error(`Company with id ${id} not found`);
      }

      // Verificar se o ownerId fornecido corresponde ao ownerId da empresa
      if (company.ownerId.toString() !== ownerId) {
        return { Error: "Only the owner can delete the company" };
      }

      return this.companyService.remove(id, ownerId);
    } catch (error) {
      exceptionsFilter(error);
    }
  }
}
