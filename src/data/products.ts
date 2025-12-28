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
    name: "Raw Makhana – 200g Pouch",
    price: 265,
    originalPrice: 298,
    image: "/images/products/raw-makhana.jpg"
  },
  {
    id: 2,
    name: "Water Chestnut Flour – 200gm Pouch",
    price: 535,
    originalPrice: 595,
    image: "/images/products/water-chestnut-flour.jpg"
  }
];
