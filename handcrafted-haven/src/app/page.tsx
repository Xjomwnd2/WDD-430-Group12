import Image from "next/image";
import styles from "./page.module.css";
import HeroImg from "./ui/landing-page/hero-img";
import ProductTypesWrapper from "./ui/landing-page/product-type";
import SiteInfoWrapper from "./ui/landing-page/site-info";

export default function Home() {
  return (
    <div>
      {/* landing page */}
      <HeroImg />
      <ProductTypesWrapper />
      <SiteInfoWrapper />
    </div>
  );
}
