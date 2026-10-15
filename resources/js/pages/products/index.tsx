import { Form, Head, Link } from '@inertiajs/react';
import { ArrowUpRight, Package, Plus, Trash2 } from 'lucide-react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';

export default function ProductsIndex({
    products,
}: {
    products: Product[];
}) {
    const formatPrice = (price: string) =>
        new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'USD',
        }).format(Number(price));

    return (
        <>
            <Head title="Products" />

            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Heading
                        variant="small"
                        title="Products"
                        description={`${products.length} ${products.length === 1 ? 'product' : 'products'}`}
                    />
                    <Button asChild>
                        <Link href="/products/create">
                            <Plus />
                            New product
                        </Link>
                    </Button>
                </div>

                {products.length > 0 ? (
                    <div className="overflow-hidden rounded-lg border">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[640px] text-left text-sm">
                                <thead className="border-b bg-muted/40 text-muted-foreground">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">
                                            Product
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Price
                                        </th>
                                        <th className="px-4 py-3 text-right font-medium">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="max-w-xl px-4 py-4">
                                                <div className="font-medium">
                                                    {product.name}
                                                </div>
                                                <p className="mt-1 line-clamp-2 text-muted-foreground">
                                                    {product.description ||
                                                        'No description'}
                                                </p>
                                            </td>
                                            <td className="px-4 py-4 font-medium tabular-nums">
                                                {formatPrice(product.price)}
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex justify-end gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                    >
                                                        <Link
                                                            href={`/products/${product.id}/edit`}
                                                        >
                                                            <ArrowUpRight />
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Form
                                                        action={`/products/${product.id}`}
                                                        method="delete"
                                                    >
                                                        {({ processing }) => (
                                                            <Button
                                                                type="submit"
                                                                variant="ghost"
                                                                size="sm"
                                                                disabled={
                                                                    processing
                                                                }
                                                                aria-label={`Delete ${product.name}`}
                                                            >
                                                                <Trash2 className="text-destructive" />
                                                                Delete
                                                            </Button>
                                                        )}
                                                    </Form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex min-h-64 flex-col items-center justify-center border-y px-6 py-12 text-center">
                        <Package className="mb-4 size-8 text-muted-foreground" />
                        <h2 className="font-medium">No products yet</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Create your first product to get started.
                        </p>
                        <Button className="mt-5" asChild>
                            <Link href="/products/create">
                                <Plus />
                                Create product
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

ProductsIndex.layout = {
    breadcrumbs: [{ title: 'Products', href: '/products' }],
};