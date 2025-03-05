import { Camera, AiBox } from './types';

export async function fetchCameras(): Promise<Camera[]> {
  const res = await fetch('http://localhost:8000/cameras', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch cameras');
  }
  return res.json();
}

export async function fetchAiBoxes(): Promise<AiBox[]> {
  const res = await fetch('http://localhost:8000/ai', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch AI boxes');
  }
  return res.json();
}
