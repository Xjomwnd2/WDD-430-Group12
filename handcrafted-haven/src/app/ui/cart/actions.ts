interface Product {
    product_id: string;
    user_id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    images: [string];
}

interface cartItem {
    product_id: string;
    qty: number;
}

export function fetchCartList(){
    try {
        let cartList = JSON.parse(localStorage.getItem('haven-cart') || '[]')
        return cartList;
    } catch (error){
        console.error('Error parsing cart list:', error) 
        return [];
    }
}

export function deleteItemFromCart(product_id: string){
    let cartList: cartItem[] = JSON.parse(localStorage.getItem('haven-cart') || '[]');
    cartList = cartList.filter(item => item.product_id !== product_id);
    localStorage.setItem('haven-cart', JSON.stringify(cartList));
}

export function addProductToCart(product_id: string): void {
    let cartList: cartItem[] = JSON.parse(localStorage.getItem('haven-cart') || '[]');
    let productExists = false;
    cartList = cartList.map(item => {
        if (item.product_id === product_id){
            productExists = true;
            return { ...item, qty: item.qty + 1 };
        } else {
            return item;
        }
    });
    if (productExists == false){
        const cartItem = {product_id, qty: 1};
        cartList.push(cartItem);
    }
    localStorage.setItem('haven-cart', JSON.stringify(cartList));
}

export function changeProductQty(product_id: string, qty: number){
    let cartList: cartItem[] = JSON.parse(localStorage.getItem('haven-cart') || '[]');
    cartList.forEach(item => {
        if(item.product_id === product_id){
            item.qty = qty;
        }
    });
    localStorage.setItem('haven-cart', JSON.stringify(cartList))
}

export async function calculateCartTotal(){
    let cartList: cartItem[] = JSON.parse(localStorage.getItem('haven-cart') || '[]')
    let total: number = 0;
    for (const item of cartList) {
        let product: Product = await fetchProductInfo(item.product_id);
        let price = product.price;
        let subtotal = price * item.qty;
        total += subtotal;
    }

    return total;
}

export async function fetchProductInfo(product_id: string){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try{
        const res = await fetch(`${apiUrl}/products/${product_id}`);
        if(!res.ok) {
        throw new Error("Failed to fetch product list");
        }
        const product = await res.json();
        return product;
    } catch (error) {
        console.error("Error fetching products list:", error);
        return undefined;
}}


