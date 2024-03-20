import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsNumber,
  IsDateString,
} from "class-validator";

export class CreatePlantDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Capacidade da usina",
    example: 100.5,
  })
  capacity: number;

  @ApiProperty({
    description: "Método de contato",
    example: "Telefone",
    required: false,
  })
  contactMethod?: string;

  @ApiProperty({
    description: "Pessoa de contato",
    example: "João Silva",
    required: false,
  })
  contactPerson?: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    description: "Data de conexão à rede",
    example: "2024-03-20T12:00:00Z",
  })
  gridConnectionDate: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Latitude da usina",
    example: "-23.5505",
  })
  latitude: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Longitude da usina",
    example: "-46.6333",
  })
  longitude: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Endereço da usina",
    example: "Rua XPTO, 123",
  })
  plantAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Código único da usina",
    example: "PLANT-123",
  })
  plantCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Nome da usina",
    example: "Planta Solar X",
  })
  plantName: string;

  @IsUUID("all")
  @ApiProperty({
    description: "ID da empresa associada à usina",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  enterpriseId: string;
}
