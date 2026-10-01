"use client"

import { useActionState } from "react";
import { createProduct, CreateProductState } from "../actions/actions";

const initialState: CreateProductState = {
  success: false,
  errors: {},
};

function getInitialState(): CreateProductState{
  return {
    success: false,
    errors: {},
  }
}


interface GreetingProps {
  name?: string;
}

export default function CreateNewProductForm({ name }: GreetingProps) {
  const [state, formAction, pending] = useActionState(
    createProduct,
    getInitialState()
  );


  return (
    <form action={formAction} className="max-w-md space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Product name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>

        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        />

        {state.errors.price && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.price[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {pending ? "Creating..." : "Create Product"}
      </button>

      {state.success && (
        <p className="text-sm text-green-600">
          Product created successfully.
        </p>
      )}
    </form>
  );
}
