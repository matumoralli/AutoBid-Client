import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import HeaderForm from '@/components/sell-car/submit/HeaderForm';
import UserInfoForm from '@/components/sell-car/submit/UserInfoForm';
import VehicleInfoForm from '@/components/sell-car/submit/VehicleInfoForm';
import TitleInfoForm from '@/components/sell-car/submit/TitleInfoForm';
import ReservePriceForm from '@/components/sell-car/submit/ReservePriceForm';
import FormButton from '@/components/sell-car/submit/FormButton';
import PhotosForm from '@/components/sell-car/submit/PhotosForm';

const validationSchema = Yup.object({
  sellerType: Yup.string().required('Selecciona el tipo de vendedor'),
  fullName: Yup.string().required('Ingresa tu nombre completo'),
  contactNumber: Yup.string().required('Ingresa tu número de contacto'),
  dominio: Yup.string().required('Ingresa el dominio'),
  anio: Yup.string().required('Selecciona el año'),
  marca: Yup.string().required('Ingresa la marca'),
  modelo: Yup.string().required('Ingresa el modelo'),
  kilometraje: Yup.number().required('Ingresa el kilometraje'),
  transmision: Yup.string().required('Selecciona la transmisión'),
  notas: Yup.string().required('Ingresa las notas / datos importantes'),
  fallaExistente: Yup.string().required('Selecciona si hay alguna falla mecánica o cosmética'),
  provincia: Yup.string().required('Ingresa la provincia'),
  localidad: Yup.string().required('Ingresa la localidad'),
  codigoPostal: Yup.string().required('Ingresa el código postal'),
  esTitular: Yup.string().required('Selecciona si es titular o no'),
  minReservePrice: Yup.string().required('Selecciona si deseas poner un precio mínimo de venta'),
});

export default function Submit() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // Realiza la lógica de envío del formulario aquí
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center">
      <div className='mt-[100px] md:mt-[130px] max-w-xl mx-4 sm:mx-0'>
        <HeaderForm/>
        <Formik
          initialValues={{
            sellerType: '',
            fullName: '',
            contactNumber: '',
            dominio: '',
            anio: '',
            marca: '',
            modelo: '',
            kilometraje: '',
            transmision: '',
            notas: '',
            fallaExistente: '',
            fallaDescripcion: '',
            provincia: '',
            localidad: '',
            codigoPostal: '',
            esTitular: '',
            nombreTitular: '',
            minReservePrice: '',
            reservePrice: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              <UserInfoForm formikProps={formikProps}/>
              <VehicleInfoForm formikProps={formikProps}/>
              <TitleInfoForm formikProps={formikProps}/>
              <ReservePriceForm formikProps={formikProps}/>
              <FormButton />
            </Form>
          )}
        </Formik>
      </div>
    </div> 
  )
};


