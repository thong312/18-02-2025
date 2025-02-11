'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Header from '../components/Header'; // Import the Header component
import LoginBtn from './loginBtn'; // Import the LoginBtn component

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  // return (
  //   <>
  //     <Header /> {/* Add the Header component */}
  //     <div className="flex justify-start"> {/* Add a container with flexbox */}
  //       <LoginBtn /> {/* Add the LoginBtn component */}
  //     </div>
  //   </>
  // );
}