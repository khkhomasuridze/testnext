import { getProducts } from "@/app/features/products/api/getProducts";
import Link from "next/link";

export const revalidate = 60
export default async function ProductsPage(){
  
  const products = await getProducts()

  return <div className="p-6">
  <h2 className="mb-6 text-2xl font-semibold text-gray-900">
    Products
  </h2>

  <ul className="space-y-3">
    {products.map((post: { id: number; name: string }) => (
      <li
        key={post.id}
        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
      >
        <span className="font-medium text-gray-800">
          {post.name}
        </span>

        <Link
          href={`/products/${post.id}/edit`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>

        <Link
          href={`/products/${post.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Go To the Post →
        </Link>
      </li>
    ))}
  </ul>

  <Link href="/" className="mb-6 mt-6 inline-flex items-center rounded-lg bg-[#f44336] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d32f2f]" > ← Go Back </Link>
  <Link href="/products/create" className="mb-6 mt-6 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition" > Create Product </Link>
</div>
}