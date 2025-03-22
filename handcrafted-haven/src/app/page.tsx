import Image from "next/image";
import styles from "./page.module.css";
import HeroImg from "./ui/landing-page/hero-img";
import ProductTypesWrapper from "./ui/landing-page/product-type";

export default function Home() {
  return (
    <div>
      {/* landing page */}
      <HeroImg />
      <ProductTypesWrapper />
    </div>
  );
}
