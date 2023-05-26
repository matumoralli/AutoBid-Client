import React from 'react'
import FirstSection from '@/components/sell-car/FirstSection';
import OurAuctions from '@/components/sell-car/OurAuctions';
import HowItWorks from '@/components/sell-car/HowItWorks';
import SubmitButton from '@/components/sell-car/SubmitButton';

export default function SellCar() {
  return (
    <div className="p-4 mt-10 max-w-[1440px] mx-auto text-gray-600">
      <div className="container px-0 py-24 mx-auto max-w-3xl">
        <FirstSection/>
        <OurAuctions/>
        <HowItWorks/>
        <SubmitButton/>
      </div>
    </div>
  )
}
