export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vikram Gold Special Mix Tea – 500g Box",
    price: 265,
    originalPrice: 298,
    image: "/images/products/shoes.jpg"
  },
  {
    id: 2,
    name: "Vikram Gold Special Mix Tea – 1Kg Pouch",
    price: 535,
    originalPrice: 595,
    image: "/images/products/tshirt.jpg"
  },
  {
    id: 3,
    name: "Vikram Premium Dust Tea – 250g Box",
    price: 160,
    originalPrice: 185,
    image: "/images/products/watch.jpg"
  },
  {
    id: 3,
    name: "Premium Makhana – 250g Box",
    price: 160,
    originalPrice: 185,
    image: "/images/products/makhana.jpg"
  },
  {
    id: 3,
    name: "Premium Makhana back photo– 250g Box",
    price: 160,
    originalPrice: 185,
    image: "/images/products/makhana_back.jpg"
  }
];
