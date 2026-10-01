import getProduct from "@/app/features/products/api/getProduct";

type PostPageProps = {
  params: Promise<{ id: string }>
}

export default async function PostDetails({ params }: PostPageProps){
  

  const { id } = await params;
  const product = await getProduct(id);

  return <div className="rounded-2xl max-w-[600] border border-gray-200 bg-white p-8 shadow-lg">
  <div className="mb-6 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">
        Product details
      </p>
      <h1 className="mt-1 text-2xl font-bold text-gray-900">
        {product.name}
      </h1>
    </div>

    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      #{product.id}
    </span>
  </div>

  <div className="border-t border-gray-100 pt-6">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">
        Product ID
      </span>
      <span className="text-sm font-semibold text-gray-900">
        {product.id}
      </span>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">
        Product name
      </span>
      <span className="text-sm font-semibold text-gray-900">
        {product.name}
      </span>
    </div>

    <div className="mt-6 rounded-xl bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-600">
          Price
        </span>

        <span className="text-2xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
</div>

}