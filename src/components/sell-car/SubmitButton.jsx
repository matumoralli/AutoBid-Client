import React from 'react'
import { useRouter } from 'next/router';

export default function SubmitButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/sell-car/submit')} 
      className="flex mx-auto my-10 text-black font-medium bg-red-500 border-0 py-3 px-16 focus:outline-none hover:bg-red-600 hover:text-white rounded text-xl">
      ¡Aplica para vender!
    </button>
  )
}
