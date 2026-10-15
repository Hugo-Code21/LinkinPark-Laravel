import { Head } from '@inertiajs/react';
import Heading from '@/components/heading';
import ProductForm from '@/components/product-form';
import type { Product } from '@/types';

export default function EditProduct({ product }: { product: Product }) {
    return (
        <>
            <Head title={`Edit ${product.name}`} />
            <div className="flex flex-col gap-6">
                <Heading
                    variant="small"
                    title={`Edit ${product.name}`}
                    description="Update this product's details"
                />
                <ProductForm product={product} />
            </div>
        </>
    );
}

EditProduct.layout = {
    breadcrumbs: [
        { title: 'Products', href: '/products' },
        { title: 'Edit product', href: '/products' },
    ],
};