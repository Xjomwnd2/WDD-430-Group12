"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../ui/products-page/loading";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");

    if (!isLogged) {
      router.push("/login");
    }
  }, [router]);

  return <Loading />;
}
