import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid} from 'uuid';

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [{
      productId: uuid(),
      productName: "Sabritas Adobadas 250g",
      price: 25,
      countSeal: 10,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Pepsi 600ml",
      price: 22,
      countSeal: 15,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Agua ciel 1L",
      price: 18,
      countSeal: 0,
      provider: uuid(),
    }];
  create(createProductDto: CreateProductDto) {
    createProductDto.productId = uuid();
    createProductDto.provider = uuid();
    this.products.push(createProductDto)
    return createProductDto
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const productFound = this.products.filter((products) => products.productId === id) [0];
    if (!productFound) throw new NotFoundException();
    return productFound;
  }

  findByProvider(id: string) {
    const productsFound = this.products.filter((products) => products.provider === id);
    if (productsFound.length === 0) throw new NotFoundException();
    return productsFound;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    let productUpdated = this.findOne(id);
    productUpdated = {
      ... productUpdated,
      ... updateProductDto,
    }
    return productUpdated;
  }

  remove(id: string) {
    const { productId } = this.findOne(id);
    this.products = this.products.filter((product) => product.productId !== productId);
    return this.products;
  }
}
