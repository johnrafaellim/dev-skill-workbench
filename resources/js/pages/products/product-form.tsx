import { Form, Head, Link, router, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { index } from '@/routes/products';
import ProductController from '@/actions/App/Http/Controllers/ProductController';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import InputError from '@/components/input-error';
import type { Product } from '@/types/product';
import type { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { usePage } from '@inertiajs/react';

type Mode = 'create' | 'view' | 'edit';

interface Props {
    product: Product
    mode: Mode
}

export default function ProductForm({ product, mode }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        'name': product?.name ?? '',
        'description': product?.description ?? '',
        'price': product?.price ?? '',
        'featured_image': null as File | null
    });

    const isView = mode === 'view';
    const isEdit = mode === 'edit';
    const isCreate = mode === 'create';

    // Dynamic Title based on Mode
    const title =
        mode === 'create'
            ? 'Add Product'
            : mode === 'edit'
                ? `Edit ${product?.name ?? 'Product'}`
                : product?.name ?? 'View Product';

    // Form submit endpoint based on mode
    const formAction = isEdit && product
        ? ProductController.update.form({ product: product.id })
        : ProductController.store.form();

    return (
        <>
            <Head title="Add Produdct" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="ml-auto">
                    <Link className="bg-indigo-800 px-4 py-2 rounded-lg text-white text-md cursor-pointer hover:opacity-90" as="button" href={index()}>Back to Products</Link>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form
                            {...formAction}
                            disableWhileProcessing
                            className="flex flex-col gap-4" autoComplete='off'
                        >
                            {({ processing, errors, progress }) => (
                                <>
                                    <div className="grid gap-6">

                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Product Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder='Product Name'
                                                autoFocus
                                                tabIndex={1}
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                disabled={isView || processing}
                                            />
                                            <InputError message={errors.name} />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="description">Product Description</Label>
                                            <TextArea
                                                id="description"
                                                name="description"
                                                rows={5}
                                                cols={60}
                                                tabIndex={2}
                                                placeholder="Product Description"
                                                value={data.description}
                                                onChange={(e) => setData('description', e.target.value)}
                                                disabled={isView || processing}
                                            />
                                            <InputError message={errors.description} />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="price">Product Price</Label>
                                            <Input
                                                id="price"
                                                name="price"
                                                type="text"
                                                placeholder='Product Price'
                                                tabIndex={3}
                                                value={data.price}
                                                onChange={(e) => setData('price', e.target.value)}
                                                disabled={isView || processing}
                                            />
                                            <InputError message={errors.price} />
                                        </div>

                                        {
                                            !isView ? (
                                                <div className="grid gap-2">
                                                    <Label htmlFor="featured_image">Featured Image</Label>
                                                    <Input
                                                        id="featured_image"
                                                        name="featured_image"
                                                        type="file"
                                                        tabIndex={4}
                                                        accept="image/jpeg,image/png,image/jpg,image/gif"
                                                        disabled={isView || processing}
                                                    />
                                                    <InputError message={errors.featured_image} />
                                                </div>
                                            ) : (
                                                <div className="grid gap-2">
                                                    <Label htmlFor="featured_image">Featured Image</Label>
                                                    <img
                                                        src={`/storage/${product.featured_image}`}
                                                        alt={product?.name ?? data.name}
                                                        className="h-40 rounded-lg border object-cover"
                                                    />
                                                </div>
                                            )
                                        }


                                        {progress && (
                                            <progress value={progress.percentage} max={100} />
                                        )}

                                        {
                                            !isView && (
                                                <Button
                                                    type="submit"
                                                    className="w-fit cursor-pointer hover:opacity-90"
                                                    tabIndex={5}
                                                    data-test="login-button"
                                                >
                                                    {processing && <Spinner />}
                                                    {processing ? (isEdit ? 'Updating...' : 'Creating...') : isEdit ? 'Update' : 'Create'} Product
                                                </Button>
                                            )
                                        }
                                    </div>
                                </>
                            )}
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

/**
 * Inner component to dynamically extract props using Inertia's usePage hook
 */
function ProductFormLayout({ children }: { children: React.ReactNode }) {
    const { props } = usePage<{ product?: Product; mode: Mode }>();
    const { product, mode } = props;

    const dynamicTitle =
        mode === 'create'
            ? 'Add Product'
            : mode === 'edit'
                ? `Edit ${product?.name ?? 'Product'}`
                : product?.name ?? 'View Product';

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Products',
            href: index(),
        },
        {
            title: dynamicTitle,
            href: '#',
        },
    ];

    return <AppLayout breadcrumbs={breadcrumbs}>{children}</AppLayout>;
}

// Set the layout wrapper
ProductForm.layout = (page: React.ReactNode) => (
    <ProductFormLayout>{page}</ProductFormLayout>
);

