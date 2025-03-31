export async function fetchSellerProductList(user_id: string) {
    const data = await fetch(`https://handcrafted-haven-gamma.vercel.app/api/sellers/${user_id}/products`);
    const productsList = await data.json()
    return productsList;
}

export async function fetchSellerInfo(user_id: string) {
    const data = await fetch(`https://handcrafted-haven-gamma.vercel.app/api/sellers/${user_id}`)
    const sellerProfile = await data.json()
    return sellerProfile;
}

export async function fetchSellersList() {
    const data = await fetch(`https://handcrafted-haven-gamma.vercel.app/api/sellers`)
    const sellersList = await data.json()
    return sellersList;
}