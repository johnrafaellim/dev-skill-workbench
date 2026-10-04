import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { create } from '@/routes/products';
import styles from "./index.module.css";

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    featured_image: string | null;
    featured_image_original_name: string | null;
    created_at: string;
    updated_at: string;
};
type Props = {
    data: Product[];
};

export default function Index({ data }: Props) {
    return (
        <>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="ml-auto">
                    <Link className="bg-indigo-800 px-4 py-2 rounded-lg text-white text-md cursor-pointer hover:opacity-90" as="button" href={create()}>Add Product</Link>
                </div>
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Featured Image</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {product.featured_image ? (
                                            <img
                                                src={`/storage/${product.featured_image}`}
                                                alt={product.featured_image_original_name ?? product.name}
                                                className="max-w-30"
                                            />
                                        ) : (
                                            <span>—</span>
                                        )}
                                    </td>
                                    <td>{product.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: '/products',
        },
    ],
};
