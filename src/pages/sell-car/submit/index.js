import React from 'react';
import { Formik, Form } from 'formik';
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
  fullName: Yup.string()
    .required('Ingresa tu nombre completo.')
    .min(4, 'El nombre debe tener al menos 4 caracteres.')
    .max(25, 'El nombre no puede tener más de 25 caracteres.')
    .matches(/^[A-Za-z\s]+$/, 'Ingresa solo letras en el campo de nombre.'),
  contactNumber: Yup.string()
    .required('Ingresa tu número de contacto.')
    .matches(/^[0-9]{10}$/, 'El número de teléfono debe tener 10 dígitos sin caracteres especiales.'),
  dominio: Yup.string()
    .required('Ingresa el dominio.')
    .max(7, 'El dominio puede tener hasta 7 caracteres.'),
  anio: Yup.string().required('Selecciona el año.'),
  marca: Yup.string()
    .required('Ingresa la marca.')
    .matches(/^[A-Za-z\s]+$/, 'Ingresa solo letras en el campo de marca.'),
  modelo: Yup.string()
    .required('Ingresa el modelo.')
    .matches(/^[A-Za-z\s]+$/, 'Ingresa solo letras en el campo de modelo.'),
  kilometraje: Yup.number()
    .required('Ingresa el kilometraje.'),
  transmision: Yup.string().required('Selecciona la transmisión.'),
  notas: Yup.string().required('Ingresa las notas / datos importantes.'),
  fueModificado: Yup.string().required('Selecciona si el vehículo es modificado o no.'),
  fallaExistente: Yup.string().required('Selecciona si hay alguna falla mecánica o cosmética.'),
  provincia: Yup.string()
    .required('Ingresa la provincia.')
    .matches(/^[A-Za-z\s]+$/, 'Ingresa solo letras en el campo de provincia.'),
  localidad: Yup.string()
    .required('Ingresa la localidad.')
    .matches(/^[A-Za-z\s]+$/, 'Ingresa solo letras en el campo de localidad.'),
  codigoPostal: Yup.number().required('Ingresa el código postal.'),
  esTitular: Yup.string().required('Selecciona si es titular o no.'),
  minReservePrice: Yup.string().required('Selecciona si deseas poner un precio mínimo de venta.'),
  images: Yup.array()
    .required("Por favor carga al menos una imagen.")
    .min(1, "Por favor carga al menos una imagen.")
    .max(5, "Por favor carga hasta 5 imagenes.")
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
            fueModificado: '',
            fallaExistente: '',
            fallaDescripcion: '',
            provincia: '',
            localidad: '',
            codigoPostal: '',
            esTitular: '',
            nombreTitular: '',
            minReservePrice: '',
            reservePrice: '',
            images: [],
          }}
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


