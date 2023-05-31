import * as Yup from 'yup';

export const validationSchema = Yup.object({
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
    .matches(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/, 'Ingresa solo letras en el campo de marca.'),
  modelo: Yup.string()
    .required('Ingresa el modelo.')
    .matches(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/, 'Ingresa solo letras en el campo de modelo.'),
  kilometraje: Yup.number()
    .required('Ingresa el kilometraje.'),
  transmision: Yup.string().required('Selecciona la transmisión.'),
  notas: Yup.string().required('Ingresa las notas / datos importantes.'),
  fueModificado: Yup.string().required('Selecciona si el vehículo es modificado o no.'),
  fallaExistente: Yup.string().required('Selecciona si hay alguna falla mecánica o cosmética.'),
  fallaDescripcion: Yup.string().test('fallaDescripcion', 'Ingresa la descripción de la falla.', function (value) {
    const { fallaExistente } = this.parent;
    if (fallaExistente === 'si') {
      return Yup.string().required('Ingresa la descripción de la falla.').isValidSync(value);
    }
    return true;
  }),
  provincia: Yup.string()
    .required('Ingresa la provincia.')
    .matches(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/, 'Ingresa solo letras en el campo de provincia.'),
  localidad: Yup.string()
    .required('Ingresa la localidad.')
    .matches(/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/, 'Ingresa solo letras en el campo de localidad.'),
  codigoPostal: Yup.number().required('Ingresa el código postal.'),
  esTitular: Yup.string().required('Selecciona si es titular o no.'),
  nombreTitular: Yup.string().test('nombreTitular', 'Cuál es el nombre del titular y tu relación con él.', function (value) {
    const { esTitular } = this.parent;
    if (esTitular === 'no') {
      return Yup.string().required('Ingresa el nombre del titular y tu relación con él.').isValidSync(value);
    }
    return true;
  }),
  minReservePrice: Yup.string().required('Selecciona si deseas poner un precio mínimo de venta.'),
  reservePrice: Yup.string().test('reservePrice', 'Ingresa un precio mínimo para la reserva que sea válido.', function (value) {
    const { minReservePrice } = this.parent;
    if (minReservePrice === 'si') {
      return Yup.string().required('Ingresa un precio mínimo para la reserva que sea válido.').isValidSync(value);
    }
    return true;
  }),
  images: Yup.array()
    .required("Por favor carga al menos una imagen.")
    .min(1, "Por favor carga al menos una imagen.")
    .max(5, "Por favor carga hasta 5 imágenes.")
});

export default validationSchema;