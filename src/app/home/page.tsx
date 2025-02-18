'use client'
import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [numList] = useState([1, 2, 7, 4, 3, 5]);
  const greaterThanFive = numList.filter(num => num > 5);
  const indexOfSeven = numList.indexOf(7);
  const sortedList = [...numList].sort((a, b) => a - b);
  const filteredList = numList.filter(num => num !== 3);

  const decimalSum = 0;
  const API_URL = 'http://localhost:3000'; 
  const teamMembers = ['Thông', 'Hải', 'Phần', 'Linh', 'Lâm']; 
  const isProgrammer = true; 

  const router = useRouter();

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Question 1</h2>
      <p><strong>Dãy số :</strong> {JSON.stringify(numList)}</p>
      <p><strong>Lớn hơn 5:</strong> {JSON.stringify(greaterThanFive)}</p>
      <p><strong>Số thứ tự của số 7:</strong> {indexOfSeven}</p>
      <p><strong>Sắp xếp mảng theo thứ tự nhỏ đến lớn:</strong> {JSON.stringify(sortedList)}</p>
      <p><strong>Xóa 3 ra khỏi mảngmảng</strong> {JSON.stringify(filteredList)}</p>
      <button
          type="button"
          className="px-6 py-3 bg-orange-300 text-white font-semibold rounded-md hover:bg-orange-600 transition"
          onClick={() => router.push('/login')}
        >
          Go to Login
        </button>
    </div>
  );
}

