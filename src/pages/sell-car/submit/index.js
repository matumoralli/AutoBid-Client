import React from 'react';
import { Formik, Form } from 'formik';
import HeaderForm from '@/components/sell-car/submit/HeaderForm';
import UserInfoForm from '@/components/sell-car/submit/UserInfoForm';
import VehicleInfoForm from '@/components/sell-car/submit/VehicleInfoForm';
import TitleInfoForm from '@/components/sell-car/submit/TitleInfoForm';
import ReservePriceForm from '@/components/sell-car/submit/ReservePriceForm';
import FormButton from '@/components/sell-car/submit/FormButton';
import PhotosForm from '@/components/sell-car/submit/PhotosForm';
import validationSchema from '@/components/sell-car/submit/formUtils/validationSchema';
import initialValues from '@/components/sell-car/submit/formUtils/initialValues';

export default function Submit() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // La lógica del formulario ira en este lugar
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center">
      <div className='mt-[100px] md:mt-[130px] max-w-xl mx-4 sm:mx-0'>
        <HeaderForm/>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false} // Habilitar validación en tiempo real
          validateOnBlur={true} // Habilitar validación al perder el foco
        >
          {(formikProps) => (
            <Form>
              <UserInfoForm formikProps={formikProps}/>
              <VehicleInfoForm formikProps={formikProps}/>
              <TitleInfoForm formikProps={formikProps}/>
              <ReservePriceForm formikProps={formikProps}/>
              <PhotosForm formikProps={formikProps}/>
              <FormButton />
            </Form>
          )}
        </Formik>
      </div>
    </div> 
  )
};


