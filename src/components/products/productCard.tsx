import Link from "next/link";
import { Card } from "../ui/card";

interface products {
    id: string;
    name: string;
    description: string;
    tags: string[];
    isFeatured: boolean;
    votes: number
}

export default function ProductCard({ product }: {
    product: products
}) {
    return <Link href={`/products/${product.id}`}>
        <Card></Card>
    </Link>
}