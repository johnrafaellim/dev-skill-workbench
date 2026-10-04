import { Form, Head, Link, router, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { index, create, store } from '@/routes/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import InputError from '@/components/input-error';


export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        'name': '',
        'description': '',
        'price': '',
        'featured_image': null as File | null
    });

    return (
        <>
            <Head title="Add Produdct" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="ml-auto">
                    <Link className="bg-indigo-800 px-4 py-2 rounded-lg text-white text-md cursor-pointer hover:opacity-90" as="button" href={index()}>Back to Products</Link>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Add Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form
                            {...store.form()}
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
                                                onChange={(e) => setData('name', e.target.value)}
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
                                                onChange={(e) => setData('description', e.target.value)}
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
                                                onChange={(e) => setData('price', e.target.value)}
                                            />
                                            <InputError message={errors.price} />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="featured_image">Featured Image</Label>
                                            <Input
                                                id="featured_image"
                                                name="featured_image"
                                                type="file"
                                                tabIndex={4}
                                                accept="image/jpeg,image/png,image/jpg,image/gif"
                                            />
                                            <InputError message={errors.featured_image} />
                                        </div>

                                        {progress && (
                                            <progress value={progress.percentage} max={100} />
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-fit cursor-pointer hover:opacity-90"
                                            tabIndex={5}
                                            data-test="login-button"
                                        >
                                            {processing && <Spinner />}
                                            Save Product
                                        </Button>
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

Create.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: index(),
        },
        {
            title: 'Add Product',
            href: create(),
        },
    ],
};
