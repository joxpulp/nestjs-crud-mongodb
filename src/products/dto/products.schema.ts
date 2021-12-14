import { Schema } from 'mongoose';
import { productsDTO } from './products.dto';

export const productSchema = new Schema<productsDTO>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});
