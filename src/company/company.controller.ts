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
    return this.companyService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.companyService.remove(+id);
  }
}
