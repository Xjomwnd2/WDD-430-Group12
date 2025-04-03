"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "../../ui/products-page/ProductsPageDetails.module.css";
import Loading from "../../ui/products-page/loading";

interface Product {
  title: string;
  description: string;
  price: string;
  category: string;
  images: string[];
}

interface Review {
  review_id: number;
  rating: number;
  comment: string;
  username: string;
}

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showPopup, setShowPopup] = useState(false);

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

    fetch(`/api/reviews/${params.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [params.id]);

  function addToCart() {
    console.log("Product added to cart:", product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  }

  if (!product) return <Loading />;

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{product.title}</h1>
        <br />
        <p>{product.description}</p>
        <p>
          Price: <strong>${product.price}</strong>
        </p>
        <p>Category: {product.category}</p>
        <br />
        {product.images.map((image, index) => (
          <img
            className={styles.productImage}
            key={index}
            src={image}
            alt={product.title}
          />
        ))}
      </div>

      <div>
        <br />
        <button className={styles.cartButton} onClick={addToCart}>
          Add to Cart
        </button>
      </div>

      {showPopup && <div className={styles.popup}>Product added to cart!</div>}

      <br />
      <br />
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map((review, index) => (
            <li key={index}>
              <p className={styles.reviewRating}>Rating: {review.rating} ⭐</p>
              <p className={styles.reviewComment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
}
