"use server";

import z from "zod";
import { createProductApi } from "../../../(protected)/products/create/createProductApi";
import { redirect } from "next/navigation";
import { updateTag } from "next/cache";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
});

export type CreateProductState = {
  success: boolean;
  errors: {
    name?: string[];
    price?: string[];
    form?: string[];
  };
};

export async function createProduct(
  previousState: CreateProductState, 
  formData: FormData
): Promise<CreateProductState> {
  
  const result = productSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await createProductApi(result.data);
  } catch {

    return {
      success: false,
      errors: {

        // _form: ["Failed to create product."],
      },
    };
  }

  // revalidatePath("/products");
  updateTag("products")
  // revalidateTag("products", "max")
  redirect("/products");
}