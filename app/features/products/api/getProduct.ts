import { Product } from "../types";

export default async function getProduct(id: string): Promise<Product>{

  // "use cache";
  // cacheLife({
  //   revalidate: 10
  // });

  const response = await fetch(`${process.env.API_URL}/api/Products/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return  await response.json();
}