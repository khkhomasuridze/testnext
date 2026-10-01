"use client"

import { Product } from '@/app/models/Product'
import React, { useActionState, useEffect, useRef, useState } from 'react'
import { EditProductState, updateProduct } from '../actions'


const getInitialState = (): EditProductState =>{
  return {
    success: false,
    errors: {}
  }
}

export default function EditProduct({product}: { product: Product}) {

  const updateProductFunctionWithPredefinedProductId = updateProduct.bind(null, product.id)

  const [state, formAction, pending] = useActionState(updateProductFunctionWithPredefinedProductId, getInitialState())

  return (
    <>
    <form className="max-w-md space-y-5" action={formAction}
    >
  <div>
    <label
      htmlFor="name"
      className="mb-1 block text-sm font-medium text-gray-700"
    >
      Name
    </label>

    <input
      id="name"
      name="name"
      type="text"
      defaultValue={product.name}
      className="w-full rounded-lg border border-gray-300 px-3 py-2
                 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      placeholder="Enter product name"
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
      defaultValue={product.price}
      step="0.01"
      min="0"
      className="w-full rounded-lg border border-gray-300 px-3 py-2
                 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      placeholder="0.00"
    />
  </div>

  <button
    type="submit"
    className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white
               hover:bg-blue-700 focus:outline-none focus:ring-2
               focus:ring-blue-500 focus:ring-offset-2"
  >
    Update Product
  </button>
</form>
    </>
  )
}
