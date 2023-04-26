import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsInt()
  id_organization: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;

  @IsNotEmpty()
  @IsInt()
  status: number;
}
