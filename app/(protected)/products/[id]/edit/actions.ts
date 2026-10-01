"use server";

import updateProductAsync from "@/app/features/products/api/updateProducts";
import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export type EditProductState = {
  success: boolean;
  errors: {
    name?: string[];
    price?: string[];
    _form?: string[];
  };
};

export async function updateProduct(
  productId: number,
  previousState: EditProductState,
  formData: FormData
): Promise<EditProductState> {
  const name = formData.get("name");
  const price = formData.get("price");

  try {
    await updateProductAsync({
      id: productId,
      name: name!.toString(),
      price: +price!
    })

  } catch {
    return {
      success: false,
      errors: {
        // _form: ["Failed to create product."],
      },
    };
  }

  // revalidateTag(`products`, "max"); // mark the cached data as stale and allow stale data to be served while Next.js refreshes it in the background. Good when immediate freshness isn't required.
  updateTag(`products`); // immediatly, needed when user goes to this updated data page so she should see updated data
  redirect("/products");
}