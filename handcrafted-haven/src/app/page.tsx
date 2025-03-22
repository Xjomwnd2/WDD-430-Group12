import Image from "next/image";
import styles from "./page.module.css";
import HeroImg from "./ui/landing-page/hero-img";

export default function Home() {
  return (
    <div>
      {/* landing page */}
      <HeroImg />
    </div>
  );
}
