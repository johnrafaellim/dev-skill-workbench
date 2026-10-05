import { Head, Link, router } from '@inertiajs/react';
import { create, edit, show, destroy } from '@/routes/products';
import styles from "./index.module.css";
import type { Product } from '@/types/product';
import { formatIsoString } from '@/lib/utils';
import { EyeIcon, Pencil, Trash } from 'lucide-react';

type Props = {
    data: Product[];
};

export default function Index({ data }: Props) {
    const options: Intl.DateTimeFormatOptions = {
        dateStyle: 'medium',
        timeStyle: 'short',
    };
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
                            {data.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {product.featured_image ? (
                                            <img
                                                src={`/storage/${product.featured_image}`}
                                                alt={product.name}
                                                className="max-w-20"
                                            />
                                        ) : (
                                            <span>—</span>
                                        )}
                                    </td>
                                    <td>{formatIsoString(product.created_at, 'en-PH', options)}</td>
                                    <td>
                                        <div className="flex justify-around">
                                            <Link className="cursor-pointer hover:opacity-50" href={show({ id: product.id })}><EyeIcon size={15} /></Link>
                                            <Link className="cursor-pointer hover:opacity-50" href={edit({ id: product.id })}><Pencil size={15} /></Link>
                                            <Link className="cursor-pointer hover:opacity-50" href={destroy({ id: product.id })}><Trash size={15} /></Link>
                                        </div>
                                    </td>
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
