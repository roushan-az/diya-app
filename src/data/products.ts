export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  description: string;
}


export const products: Product[] = [
  {
    id: 1,
    name: "Raw Makhana – 100g Pouch",
    slug: "raw-makhana-100g",
    price: 399,
    originalPrice: 599,
    weight: "100gm",
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 2,
    name: "Water Chestnut Flour – 100gm Pouch",
    slug: "water-chestnut-flour-100g",
    price: 249,
    originalPrice: 399,
    weight: "100gm",
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  },
   {
    id: 3,
    name: "Raw Makhana – 200g Pouch",
    slug: "raw-makhana-200g",
    price: 599,
    originalPrice: 899,
    weight: "200gm",
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 4,
    name: "Water Chestnut Flour – 200gm Pouch",
    slug: "water-chestnut-flour-200g",
    price: 399,
    originalPrice: 599,
    weight: "200gm",
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  },
   {
    id: 5,
    name: "Raw Makhana – 500g Pouch",
    slug: "raw-makhana-500g",
    price: 1499,
    originalPrice: 2099,
    weight: "500gm",
    image: "/images/products/raw-makhana.jpg",
    description: "Premium quality raw makhana sourced naturally..."
  },
  {
    id: 6,
    name: "Water Chestnut Flour – 500gm Pouch",
    slug: "water-chestnut-flour-500g",
    price: 899,
    originalPrice: 1399,
    weight: "200gm",
    image: "/images/products/water-chestnut-flour.jpg",
    description: "Premium quality water chestnut flour sourced naturally..."
  }
];
