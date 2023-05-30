import React from 'react'
import { useRouter } from 'next/router';

export default function SubmitButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/sell-car/submit')} 
      className="flex mx-auto my-10 font-medium border-2 py-3 px-16 focus:outline-none border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded text-xl transition-all duration-300">
      ¡Aplica para vender!
    </button>
  )
}
