import getProduct from '@/app/features/products/api/getProduct';
import EditProduct from './components/EditProduct';

type PostPageProps = {
  params: Promise<{ id: string }>
}

export default async function EditProductPage({ params }: PostPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div>
      Editing product with id - { id } / name {product.name}

      <EditProduct product={product} />
    </div>
  )
}
