"use client";

import Link from "next/link";
import styles from "./Header_Footer.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  return (
    <header>
      <nav className={styles.Nav}>
        <div className={styles.NavLeft}>
          <Link href="/">Handcrafted Haven</Link>
        </div>

        <div className={styles.NavRight}>
          <NavLink name="Seller Profiles" href="/profiles" />
          <NavLink name="Product Listings" href="/products" />
          <NavLink name="Reviews and Ratings" href="/reviews" />
          <Link href="/account" className={styles.LoginButton}>
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function NavLink({ name, href }: { name: string; href: string }) {
  const pathname = usePathname();
  return (
    <Link
      key={name}
      href={href}
      className={clsx(styles.NavLink, {
        [styles.Active]: pathname === href,
      })}
    >
      {name}
    </Link>
  );
}
