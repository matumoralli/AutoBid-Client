import React from 'react';
import { useFormikContext } from 'formik';

export default function FormButton() {
  const { isSubmitting } = useFormikContext();

  return (
    <div>
      <button
        type="submit"
        className="px-4 py-2 mt-2 bg-red-500 text-black font-normal hover:text-white rounded-md"
        disabled={isSubmitting} // Deshabilita el botón mientras se está enviando el formulario
      >
        Submit
      </button>
    </div>
  );
}
