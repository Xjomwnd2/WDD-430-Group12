import styles from '@/app/ui/sellers/sellers.module.css'

export default function ContactForm(){
    return (
        <form className={styles.contactForm}>
            <h2>Contact Me</h2>
            <label>First Name:</label>
            <input type="text" name="fname" required/>
            <label>Last Name:</label>
            <input type="text" name="lname" required/>
            <label>Email Address:</label>
            <input type="email" name="email" required/>
            <label>Message: </label>
            <textarea name="message" placeholder="Write Message Here..." required></textarea>
            <button type="submit">Send Message</button>
        </form>
    )
}