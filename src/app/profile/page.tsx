'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col gap-4 bg-white p-8 rounded shadow-lg">

        <img
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
          alt="User Logo"
          className="w-24 h-24 mx-auto mb-4"
        />

        <p className="text-center text-xl font-bold mb-4">Profile Page</p>
        <p className="text-center text-lg">Welcome, {username}!</p>
        <button
          type="button"
          className="px-6 py-3 bg-orange-300 text-white font-semibold rounded-md hover:bg-orangeorange-600 transition"
          onClick={() => router.push('/table')}
        >
          table
        </button>
      </div>
    </div>
  );
}

