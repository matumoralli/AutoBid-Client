import React from "react";
import { Field, ErrorMessage, setFieldValue } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { TiDeleteOutline } from "react-icons/ti";

const pdfPath = "/GuiaFotos.pdf";

export default function PhotosForm({ formikProps }) {
  const { setFieldValue } = formikProps;

  const onDrop = (acceptedFiles) => {
    const images = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFieldValue("images", images);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const removeImage = (index) => {
    const updatedImages = [...formikProps.values.images];
    updatedImages.splice(index, 1);
    setFieldValue("images", updatedImages);
  };

  return (
    <div className="relative border border-gray-100 space-y-3 mx-auto rounded-md bg-white p-6 shadow-md lg:p-10 my-6">
      <h1 className="mb-4 text-xl font-bold lg:text-2xl">Fotos</h1>
      <div>
        <label className="">
          Por favor carga por lo menos 5 fotos del exterior e interior de tu
          vehículo
        </label>
        <div
          {...getRootProps()}
          className={`flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border ${
            isDragActive ? "border-blue-600" : "border-dashed border-gray-300"
          } p-5 text-center`}
        >
          <Image
            src="/../public/imageFile.png"
            alt="imgNotFound"
            className="h-16 w-16"
            width={64}
            height={64}
          />
          <p className="text-sm text-gray-600">
            Suelte los archivos de imagen deseados aquí para comenzar la carga
          </p>
          <input {...getInputProps()} />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {formikProps.values.images &&
            formikProps.values.images.map((image, index) => (
              <div key={index}>
              <Image       width={400}
      height={350}
                  src={image.preview}
                  alt={`Preview ${index}`}
                  className="w-32 h-32 object-cover rounded"
                />
                <button onClick={() => removeImage(index)}> <i className=" text-black text-2xl"><TiDeleteOutline/></i> </button>
              </div>
            ))}
        </div>
        <p className="text-sm mt-2">
          Para saber cómo tomar buenas fotos, revisa nuestra{" "}
          <Link
            className="underline text-red-500"
            target="_blank"
            rel="noopener noreferrer"
            href={pdfPath}
          >
            Guía de Fotos
          </Link>
        </p>
        <ErrorMessage
          name="images"
          component="div"
          className="text-red-500 mt-1 text-sm"
        />
      </div>
    </div>
  );
}
