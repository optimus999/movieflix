import ContactCard from "../components/contactcard"
import styles from '../contact/contact.module.css'
import ContactForm from '../components/contactform'


const page = () => {
  
    return (
      <>
      <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.785653056926!2d80.0200011112738!3d23.17802201042125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9467fa7e97f%3A0x1c247f26edbe9e22!2sHall%201%20Canteen!5e0!3m2!1sen!2sin!4v1725262296757!5m2!1sen!2sin" className={styles.mapping} width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </>
    )
  }
  
  export default page
  