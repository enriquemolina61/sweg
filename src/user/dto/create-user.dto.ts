import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'John Doe',
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'teste@teste.com',
  })
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  @ApiProperty({
    description: 'Número de telefone do usuário',
    example: '11999999999',
  })
  phoneNumber: string;
}
