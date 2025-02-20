'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Profile() {
  const [username, setUsername] = useState("");
  const [twoSumResult, setTwoSumResult] = useState<number[]>([]);
  const [nums, setNums] = useState<string>("");
  const [target, setTarget] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      router.push("/login");
    }
  }, [router]);

  function findTwoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement)!, i];
      }
      numMap.set(nums[i], i);
    }
    return [];
  }

  const handleCalculate = () => {
    const numArray = nums.split(',').map(Number);
    setTwoSumResult(findTwoSum(numArray, target));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <div className="flex flex-col gap-6 bg-white p-10 rounded-lg shadow-xl max-w-md w-full">
        <Image
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
          alt="User Logo"
          width={96}
          height={96}
          className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-300"
        />
        <p className="text-center text-2xl font-bold mb-2">Profile Page</p>
        <p className="text-center text-lg text-gray-700">Welcome, {username}!</p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter numbers separated by commas"
            value={nums}
            onChange={(e) => setNums(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Enter target number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            onClick={handleCalculate}
          >
            Calculate Two Sum
          </button>
        </div>
        <p className="text-center text-lg text-gray-700">Two Sum Result: {twoSumResult.length > 0 ? twoSumResult.join(", ") : "No result"}</p>
        <button
          type="button"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          onClick={() => router.push('/')}
        >
          back to home
        </button>
      </div>
    </div>
  );
}

