'use client';

import Link from "next/link";
import styles from "./Header_Footer.module.css";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
    return (
        <header>
            <nav className={styles.Nav}>
                <NavLink name="Home" href="/"/>
                <NavLink name="Products" href="/products"/>
                <NavLink name="Artist Profiles" href="/profiles"/>
                <NavLink name="Login" href="/account"/>
                <NavLink name="Cart" href="/cart"/>
            </nav>
        </header>
    );
}

export function NavLink({name, href}: {name: string, href: string}) {
    const pathname = usePathname()
    return (
        <Link 
            key={name}
            href={href}
            className={clsx(styles.NavLink,
                {
                  [styles.Active]: pathname === href,
                },
            )}>
            {name}
        </Link>
    )
}