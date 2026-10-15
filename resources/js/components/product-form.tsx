import { Form, Link } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Product } from '@/types';

export default function ProductForm({ product }: { product?: Product }) {
    const isEditing = product !== undefined;

    return (
        <Form
            action={isEditing ? `/products/${product.id}` : '/products'}
            method={isEditing ? 'put' : 'post'}
            className="max-w-2xl space-y-6"
        >
            {({ errors, processing }) => (
                <>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Product name</Label>
                        <Input
                            id="name"
                            name="name"
                            defaultValue={product?.name}
                            autoFocus
                            required
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={product?.description ?? ''}
                            rows={5}
                            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                        />
                        <InputError message={errors.description} />
                    </div>

                    <div className="grid gap-2 sm:max-w-xs">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            max="999999.99"
                            step="0.01"
                            defaultValue={product?.price}
                            required
                        />
                        <InputError message={errors.price} />
                    </div>

                    <div className="flex items-center gap-3 border-t pt-5">
                        <Button type="submit" disabled={processing}>
                            <Save />
                            {processing
                                ? 'Saving...'
                                : isEditing
                                  ? 'Save changes'
                                  : 'Create product'}
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/products">
                                <ArrowLeft />
                                Cancel
                            </Link>
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
}