import { Controller, Get, Post, Body, Param, Patch } from "@nestjs/common";
import { PlantService } from "./plant.service";
import { CreatePlantDto } from "./dto/create-plant.dto";
import { Plant } from "./entities/plant.entity";
import { ApiTags } from "@nestjs/swagger";
import { exceptionsFilter } from "src/helpers/exceptions.helper";
import { UpdatePlantPerformanceDto } from "./dto/update-plant-performance.dto";

@ApiTags("Plant")
@Controller("plant")
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Post()
  async create(@Body() createPlantDto: CreatePlantDto) {
    try {
      return await this.plantService.create(createPlantDto);
    } catch (error) {
      exceptionsFilter(error);
    }
  }

  @Get("company/:companyId")
  async findPlantsByCompany(
    @Param("companyId") companyId: string,
  ): Promise<Plant[]> {
    return this.plantService.findPlantsByCompany(companyId);
  }

  @Get("company/:companyId/sum")
  async sumPlantsByCompany(
    @Param("companyId") companyId: string,
  ): Promise<number> {
    return this.plantService.sumPlantsByCompany(companyId);
  }

  @Get("sum-capacity")
  async sumCapacityByCompany(): Promise<number[]> {
    return this.plantService.sumCapacityByCompany();
  }

  @Patch(":id/performance")
  async updatePerformance(
    @Param("id") id: string,
    @Body() updatePlantPerformanceDto: UpdatePlantPerformanceDto,
  ): Promise<Plant> {
    return await this.plantService.updatePerformance(
      id,
      updatePlantPerformanceDto,
    );
  }
}
