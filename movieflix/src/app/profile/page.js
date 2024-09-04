'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from '../styles/profile.module.css'; // Adjust the path if needed

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      // Optionally, handle loading state
      return;
    }
    if (!session) {
      router.push('/signin');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <p className={styles.signInMessage}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {session ? (
        <div>
          {session.user.image && (
            <img
              src={session.user.image}
              alt="User Profile"
              className={styles.profileImage}
            />
          )}
          <h1 className={styles.greeting}>Hello {session.user.name}</h1>
          <h2 className={styles.email}>Your email is {session.user.email}</h2>
        </div>
      ) : (
        <p className={styles.signInMessage}>You need to be signed in to view this page.</p>
      )}
    </div>
  );
};

export default Page;
