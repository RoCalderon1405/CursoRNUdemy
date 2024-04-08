import {AxiosError} from 'axios';
import {tesloApi} from '../../../config/api/tesloApi';
import {TesloProduct} from '../../../infraestructure/interfaces/teslo-products.response';
import {ProductMapper} from '../../../infraestructure/mappers/product.mapper';

export const getProductsByPage = async (page: number, limit: number = 20) => {
  console.log({page, limit});

  try {
    const {data} = await tesloApi.get<TesloProduct[]>(
      `/products?offset=${page * 10}&limit=${limit}`,
    );

    const products = data.map(ProductMapper.tesloProductToEntity);
    console.log(products[0]);

    return products;
  } catch (error: any) {
    const err = error as AxiosError;
    console.log(err.request?.data);
    throw new Error('Error getting products');
  }
};
