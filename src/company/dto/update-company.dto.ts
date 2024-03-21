import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdateCompanyDto {
  @IsNotEmpty()
  @IsUUID("all")
  @ApiProperty({
    description: "ID do usuário responsável pela empresa",
    example: `123e4567-e89b-12d3-a456-426614174000`,
  })
  ownerId: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Nome da empresa",
    example: "Empresa XPTO",
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Endereço da empresa",
    example: "Rua XPTO, 123",
  })
  site: string;
}
