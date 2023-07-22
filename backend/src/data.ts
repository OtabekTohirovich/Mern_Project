import { User } from "./models/UserModel";
import { Product } from "./models/ProdoctModel";
import bcrypt from "bcryptjs";

export const simpleProducts: Product[] = [
  {
    name: "T-shirt",
    slug: "t-shirts",
    image:
      "https://hosstile.com/cdn/shop/products/Dying_Breed_Raglan_White_Front.jpg?v=1664387282&width=1080",
    category: "Shirt",
    brand: "nike",
    price: 20000,
    countInStock: 0,
    discription: "hight quentity",
    rating: 6,
    numberRewiews: 12,
  },
  {
    name: "Adidas shirt",
    slug: "adidas-shirt",
    image:
      "https://hosstile.com/cdn/shop/products/Dying_Breed_Raglan_White_Front.jpg?v=1664387282&width=1080",
    category: "Shirt",
    brand: "adidass",
    price: 2000,
    countInStock: 200,
    discription: "hight quentitys",
    rating: 3.5,
    numberRewiews: 72,
  },
  {
    name: "T-shirt",
    slug: "t-shirt",
    image:
      "https://hosstile.com/cdn/shop/products/Dying_Breed_Raglan_White_Front.jpg?v=1664387282&width=1080",
    category: "Shirt",
    brand: "nike",
    price: 20000,
    countInStock: 20,
    discription: "hight quentity",
    rating: 6,
    numberRewiews: 712,
  },

  {
    name: "Lacoste shirt",
    slug: "lacoste-shirt",
    image:
      "https://hosstile.com/cdn/shop/products/Dying_Breed_Raglan_White_Front.jpg?v=1664387282&width=1080",
    category: "Pants",
    brand: "Lacoste",
    price: 2000,
    countInStock: 200,
    discription: "hight quentitys",
    rating: 4,
    numberRewiews: 72,
  },
];

export const sampleUsers: User[] = [
  {
    name: "Otash",
    email: "tohirovo630@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Otabek",
    email: "tohirovo@gmail.com",
    password: bcrypt.hashSync("133456"),
    isAdmin: false,
  },
];
