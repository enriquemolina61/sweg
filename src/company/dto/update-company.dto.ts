import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCompanyDto } from "./create-company.dto";
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Performance da empresa",
    example: 10,
  })
  performance: number;

  @IsNotEmpty()
  @IsUUID("all")
  @ApiProperty({
    description: "ID do usuário responsável pela empresa",
    example: `123e4567-e89b-12d3-a456-426614174000`,
  })
  ownerId: string;
}
