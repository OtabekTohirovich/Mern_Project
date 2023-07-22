import { ApiError } from "./types/ApiError";
import { CartItem } from "./types/Cart";
import { Product } from "./types/Product";

export const getError = (error: ApiError) => {
  return error.response && error.response.data.massage
    ? error.response.data.massage
    : error.massage;
};

export const convertProductToCartItem = (product: Product): CartItem => {
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name,
    slug: product.slug,
    image: product.image,
    price: product.price,
    quantity: 1,
    countInStock: product.countInStock 
  };
  return cartItem
};
