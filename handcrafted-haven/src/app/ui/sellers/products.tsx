import Image from "next/image";
import { fetchSellerProductList } from "./actions";

interface Product {
    product_id: number,
    user_id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    images: [string]
  }
  
export default async function ProductsWrapper ({user_id}: {user_id: string}){
    const productsList: Product[] = await fetchSellerProductList(user_id);
    return (
        <div>
            {productsList?.map((product) => (
                <ProductCard
                    key={product.product_id} // It's good practice to add a unique "key" prop when rendering lists in React
                    imageURL={product.images[0]}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );

}

export function ProductCard(
    {imageURL, title, description, price} :
    {imageURL : string, title: string, description: string, price: number}
){ 
    const imageAlt = `Picture of ${description}`
    return(
    <div>
        <Image 
        src={imageURL}
        alt={imageAlt}
        width={300}
        height={400}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>$ {price}</p>
    </div>)
}