import { ApiProperty } from "@nestjs/swagger";

export class UpdatePlantPerformanceDto {
  @ApiProperty({
    description: "Performance da usina",
    example: 10,
  })
  performance: number;
}
