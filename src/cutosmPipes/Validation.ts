import { IsEmail, IsInt, IsString } from 'class-validator';

export class Validation {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsInt()
  id: number;
}
