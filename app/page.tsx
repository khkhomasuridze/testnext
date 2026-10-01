import Link from "next/link";

export default function Home() {
  return <div className="min-h-screen bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-10">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard. this is new feature made on feature/product-improvements branch. this was fixed
      </h1>
      <p className="mt-2 text-gray-600">
        Welcome to your logistics management system.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Products
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Manage your products and inventory.
        </p>

        <Link
          href="/products"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Products →
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Photos
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Manage your photos.
        </p>

        <Link
          href="/photos"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View photos →
        </Link>
      </div>

      <div className="pointer-events-none opacity-50 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Shipments
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Track and manage your shipments.
        </p>

        <a
          href="/shipments"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Shipments →
        </a>
      </div>
    </div>
  </div>
</div>
}
