import {tesloApi} from '../../config/api/tesloApi';
import {Product} from '../../domain/entities/product';
import {TesloProduct} from '../../infraestructure/interfaces/teslo-products.response';
import {ProductMapper} from '../../infraestructure/mappers/product.mapper';

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const {data} = await tesloApi.get<TesloProduct>(`/product/${id}`);

    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${id}`);
  }
};
