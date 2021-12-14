import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productsDTO } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('productos') private readonly productModel: Model<productsDTO>,
  ) {}

  async getProducts(id?: string): Promise<productsDTO[] | productsDTO> {
    if (id) return await this.productModel.findById(id);

    return await this.productModel.find();
  }

  async addProducts(data: productsDTO): Promise<productsDTO> {
    const newProduct = new this.productModel(data);
    return await newProduct.save();
  }

  async updateProducts(id: string, data: productsDTO): Promise<productsDTO> {
    return await this.productModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id: string): Promise<productsDTO> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
