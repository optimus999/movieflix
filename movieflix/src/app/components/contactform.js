'use client'
import styles from '../contact/contact.module.css'
import {Mulish} from "next/font/google";
import {useState} from "react";
import { useSession} from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const contactform = () => {
    const notify = () => toast.warn("Sign In first", {
        position: "top-right",});

    const { data: session } = useSession();
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!session)
        {
            notify();
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            console.log(response);
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setuser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }

    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setuser((prevUser) => ({...prevUser, [name] : value}));
    }
  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           value={user.email}
                           onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={mulish.className}
                           value={user.phone}
                           onChange={handleChange}
                           required
                            autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={mulish.className}
                               value={user.message}
                               onChange={handleChange}
                               required
                                autoComplete="off"
                    />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={true}
theme="dark"
 />
    </>
  )
}

export default contactform









