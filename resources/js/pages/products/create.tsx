import { Head } from '@inertiajs/react';
import Heading from '@/components/heading';
import ProductForm from '@/components/product-form';

export default function CreateProduct() {
    return (
        <>
            <Head title="New product" />
            <div className="flex flex-col gap-6">
                <Heading
                    variant="small"
                    title="New product"
                    description="Add a product to your catalog"
                />
                <ProductForm />
            </div>
        </>
    );
}

CreateProduct.layout = {
    breadcrumbs: [
        { title: 'Products', href: '/products' },
        { title: 'New product', href: '/products/create' },
    ],
};