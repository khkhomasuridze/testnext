import { Product } from "../types";

export default async function updateProductAsync(product: Product){
  const response = await fetch(`${process.env.API_URL}/api/Products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });


  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.status}`);
  }

  // no return because server is returning no body content(null)
  // return await response.json();
}