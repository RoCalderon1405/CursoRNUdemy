import {isAxiosError} from 'axios';
import {tesloApi} from '../../config/api/tesloApi';
import {Product} from '../../domain/entities/product';

export const updateCreateProduct = (product: Partial<Product>) => {
  if (product) {
    return updateProduct(product);
  }

  throw new Error('Creación no está implementada');
};

const updateProduct = async (product: Partial<Product>) => {
  console.log({product});
  const {id, images = [], ...rest} = product;

  try {
    const checkedImages = prepareImages(images);
    console.log({checkedImages});

    const {data, status} = await tesloApi.patch(`products/${id}`, {
      images: checkedImages,
      ...rest,
    });

    console.log(status);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }

    console.log(error);
    throw new Error('Error al actualizar el producto');
  }
};

const prepareImages = (images: string[]) => {
  return images.map(image => image.split('/').pop());
};
