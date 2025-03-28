"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Define the Product type
interface Product {
  title: string;
  description: string;
  price: string;
  category: string;
  images: string[];
}

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!params.id) return;

    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProduct(data);
        } else {
          notFound();
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {product.images.map((image, index) => (
        <img key={index} src={image} alt={product.title} />
      ))}
    </div>
  );
}
