'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full bg-cover bg-center">
      <button
        type="button"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        onClick={() => router.push('/table')}
      >
        View Pokémon List
      </button>
    </div>
  );
}
