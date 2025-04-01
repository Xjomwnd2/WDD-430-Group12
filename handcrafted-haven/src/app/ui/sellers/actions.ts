export async function fetchSellerInfo(user_id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/sellers/${user_id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch sellers list");
  }
  const sellerProfile = await res.json();
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
