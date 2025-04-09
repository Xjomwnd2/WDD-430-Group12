"use client";

import CartList from "@/app/ui/cart/cartList";
import { calculateCartTotal } from "../ui/cart/actions";

export default function Page() {
  let total = calculateCartTotal();

  const deleteList = () => {
    localStorage.setItem("haven-cart", JSON.stringify(""));
  };

  return (
    <>
      <h1>My Cart</h1>
      <CartList />
      <div>
        <h3>Total: {total}</h3>
        <button onClick={() => deleteList()}>Delete List</button>
      </div>
    </>
  );
}
