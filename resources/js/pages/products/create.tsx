import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { index, create } from '@/routes/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';


export default function Create() {
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
                        <form className="flex flex-col gap-4" autoComplete='off'>
                            <div className="grid gap-6">

                                <div className="grid gap-2">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input id="name" name="name" type="text" placeholder='Product Name' autoFocus tabIndex={1} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="description">Product Description</Label>
                                    <TextArea id="description" name="description" rows={5} cols={60} tabIndex={2} placeholder="Product Description" />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="price">Product Price</Label>
                                    <Input id="price" name="price" type="text" placeholder='Product Price' tabIndex={3} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="image">Featured Image</Label>
                                    <Input id="image" name="image" type="file" tabIndex={4} />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-fit cursor-pointer hover:opacity-90"
                                    tabIndex={5}
                                    data-test="login-button"
                                >
                                    Save Product
                                </Button>
                            </div>
                        </form>
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
