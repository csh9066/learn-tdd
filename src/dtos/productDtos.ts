import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name!: string;

  @IsString()
  public description!: string;

  @IsNumber()
  @IsOptional()
  public price?: number;
}
