export default function ContactForm(){
    return (
        <form>
            <h2>Contact Me</h2>
            <label>First Name:</label>
            <input type="text" name="fname" />
            <label>Last Name:</label>
            <input type="text" name="lname" />
            <label>Email Address:</label>
            <input type="email" name="email" />
            <label>Message: </label>
            <input type="text" name="message" />
        </form>
    )
}