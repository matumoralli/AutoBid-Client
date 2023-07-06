import Image from "next/image";
import { useState } from "react";
import ImagesViewer from "./ImagesViewer";
// Update the count down every 1 second
export default function ImagesCarrousel({ imagesArray, carModel }) {
  const previewImages = imagesArray.slice(1, 4);
  const restImages = imagesArray[4];
  const [selected, setSelected] = useState("");
  const [inView, setInview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelected = (image, index) => {
    setSelected(image);
    setCurrentIndex(index);
    setInview(true);
  };

  return (
    <>
      {inView && (
        <ImagesViewer
          image={selected}
          imagesarray={imagesArray}
          setInview={setInview}
          carModel={carModel}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <section>
        <Image
          key={imagesArray[0] + "key"}
          src={imagesArray[0]}
          width={1024}
          height={768}
          alt={carModel}
          className="object-cover"
          imagesarray={imagesArray}
          priority
          onClick={() => handleSelected(imagesArray[0], 0)}
        />
        <div className=" flex justify-around overflow-hidden">
          {previewImages &&
            previewImages.map((image, index) => {
              return (
                <Image
                  key={image + "key"}
                  src={image}
                  height={80}
                  width={80}
                  sizes="(max-width: 768px) 20vw, 40vw"
                  alt={carModel}
                  className="aspect-square min-h-full max-w-full place-self-center object-scale-down"
                  onClick={() => handleSelected(image, index + 1)}
                />
              );
            })}
          {restImages && (
            <div className="relative w-fit">
              <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                <p
                  onClick={() => handleSelected(restImages, 4)}
                  className="  text-center text-white"
                >
                  Ver {imagesArray.length}
                </p>
              </div>
              <Image
                key={restImages + "key"}
                src={restImages}
                height={80}
                width={80}
                sizes="(max-width: 768px) 20vw, 40vw"
                alt={carModel}
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
