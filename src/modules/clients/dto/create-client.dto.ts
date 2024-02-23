/* eslint-disable prettier/prettier */
import { IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(5)
  identifier: string;

  @IsString()
  @MinLength(9)
  telephone: string;

  @IsString()
  @MinLength(9)
  email: string;
}
