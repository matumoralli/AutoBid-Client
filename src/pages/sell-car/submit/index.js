import React from 'react';
import HeaderForm from '@/components/sell-car/submit/HeaderForm';
import UserInfoForm from '@/components/sell-car/submit/UserInfoForm';
import VehicleInfoForm from '@/components/sell-car/submit/VehicleInfoForm';
import TitleInfoForm from '@/components/sell-car/submit/TitleInfoForm';
import ReservePriceForm from '@/components/sell-car/submit/ReservePriceForm';
import PhotosForm from '@/components/sell-car/submit/PhotosForm';
import FormButton from '@/components/sell-car/submit/FormButton';


export default function Submit() {

  return (
    <div className="flex items-center justify-center">
      <div className='mt-[100px] md:mt-[130px] max-w-xl mx-4 sm:mx-0'>
        <HeaderForm/>
        <form>
          <UserInfoForm/>
          <VehicleInfoForm/>
          <TitleInfoForm/>
          <ReservePriceForm/>
          <PhotosForm/>
          <FormButton/>
        </form>
      </div>
    </div> 
  )
};




