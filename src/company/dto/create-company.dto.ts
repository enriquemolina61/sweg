import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Nome da empresa",
    example: "Empresa XPTO",
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "CNPJ da empresa",
    example: "12345678901234",
  })
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Endereço da empresa",
    example: "Rua XPTO, 123",
  })
  site: string;

  @IsNotEmpty()
  @IsUUID("all")
  @ApiProperty({
    description: "ID do usuário responsável pela empresa",
    example: `123e4567-e89b-12d3-a456-426614174000`,
  })
  ownerId: string;
}
