"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from '../styles/signin.module.css';

export default function SignInComponent() {
  const { data: session} = useSession();

  if (session) {
    console.log(session)
    return (
      <>
        <div className={styles.aftersignincontainer}>
        <p className={styles.signedinasmessage}>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()} className={styles.button}>Sign out</button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.notSignedInContainer}>
      <div className={styles.notSignedInIcon}>
        <span role="img" aria-label="lock">🔒</span>
      </div>
      <p className={styles.notSignedInMessage}>Not signed in</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => signIn("github")}
          className={`${styles.button} ${styles.githubButton}`}
        >
          <span className={styles.buttonText}>Sign in with GitHub</span>
        </button>
        <button
          onClick={() => signIn("google")}
          className={`${styles.button} ${styles.googleButton}`}
        >
          <span className={styles.buttonText}>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
