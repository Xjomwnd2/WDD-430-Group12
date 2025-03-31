export async function fetchSellerProductList(user_id: string) {
  const data = await fetch(
    `https://handcrafted-haven-gamma.vercel.app/api/sellers/${user_id}/products`
  );
  const productsList = await data.json();
  return productsList;
}

export async function fetchSellerInfo(user_id: string) {
  const data = await fetch(
    `https://handcrafted-haven-gamma.vercel.app/api/sellers/${user_id}`
  );
  const sellerProfile = await data.json();
  return sellerProfile;
}

export async function fetchSellersList() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/sellers`);
  if (!res.ok) {
    throw new Error("Failed to fetch sellers list");
  }
  const sellersList = await res.json();
  return sellersList;
}
