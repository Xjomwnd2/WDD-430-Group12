'use client';

import { useState, useEffect } from "react";
import { fetchCartList, fetchProductInfo, deleteItemFromCart, changeProductQty } from "@/app/ui/cart/actions";
import Link from "next/link";

interface Product {
    product_id: string;
    user_id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string[];
}

export default function CartList() {
    const [cartList, setCartList] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadCart() {
            const cart = await fetchCartList();
            setCartList(cart);
            setIsLoading(false);
        }

        loadCart();
    }, []);

    if (isLoading) {
        return <p>Loading your cart...</p>;
    }

    if (cartList.length > 0) {
        return (
            <ul>
                {cartList.map((product_id) => (
                    <CartItem product_id={product_id} />
                ))}
            </ul>
        );
    } else {
        return <p>No products have been added to your cart.</p>;
    }
}

function CartItem({ product_id }: { product_id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            try {
                const productData = await fetchProductInfo(product_id);
                setProduct(productData);
            } catch (error) {
                console.error(`Error fetching product ${product_id}:`, error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [product_id]);

    if (isLoading) {
        return <li>Loading product details...</li>;
    }

    if (!product) {
        return <li>Error: Product not found.</li>;
    }

    return (
        <li key={product.product_id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <div>
                {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Product ${product.product_id} image`}
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                        }}
                    />
                ))}
            </div>
            <Link href={`/products/${product.product_id}`}>
                <button>View Details</button>
            </Link>
            <div>
            <button onClick={() => deleteItemFromCart(product_id)}>Delete Item</button>
            <p>Quantity: <input
            type="number"
            name="qty"
            onChange={(e) => changeProductQty(product_id, parseInt(e.target.value))}
            /></p>
            </div>
            
        </li>
    );
}