import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class productsDTO {
  readonly _id: string;

  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsString()
  readonly thumbnail: string;
}
