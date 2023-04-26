import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateOrganizationDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  status?: number;
}
