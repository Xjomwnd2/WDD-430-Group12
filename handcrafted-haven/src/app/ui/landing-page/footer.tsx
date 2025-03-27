import styles from './Header_Footer.module.css'

export default function Footer() {
    const year = new Date().getFullYear();
    return(
    <footer className={styles.Footer}>
        <p>&copy;{year} <br/><span>|</span> WDD430 Handcrafted Haven Group 12 <br/><span>|</span> Not a Real Website</p>
    </footer>
    )
}