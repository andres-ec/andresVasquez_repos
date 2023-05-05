import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResponseMetricsDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  tribe: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  organization: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  coverage: string;

  @IsNotEmpty()
  @IsInt()
  codeSmells: number;

  @IsNotEmpty()
  @IsInt()
  bugs: number;
  
  @IsNotEmpty()
  @IsInt()
  vulnerabilities: number;

  @IsNotEmpty()
  @IsInt()
  hotspots: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  verificationState: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  state: string;
}
