import { Product } from "../types";

export async function getProducts(): Promise<Product[]> {

  const response = await fetch(`${process.env.API_URL}/api/Products`, {
    next: {
      revalidate: 30,
      tags: ["products"]
    }
    // cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}