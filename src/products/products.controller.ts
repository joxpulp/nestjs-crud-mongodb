import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { productsDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/list/:id?')
  async getProducts(@Param('id') productId: string) {
    if (productId) return this.productService.getProducts(productId);
    return await this.productService.getProducts();
  }

  @Post('/add')
  @UsePipes(ValidationPipe)
  async addProduct(@Body() body: productsDTO) {
    return await this.productService.addProducts(body);
  }

  @Put('/update/:id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() body: productsDTO,
  ) {
    return await this.productService.updateProducts(productId, body);
  }

  @Delete('/delete/:id')
  async deleteProduct(@Param('id') productId: string) {
    return await this.productService.deleteProduct(productId);
  }
}
