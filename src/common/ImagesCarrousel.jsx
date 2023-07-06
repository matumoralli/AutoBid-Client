import Image from "next/image";
import { useState } from "react";
import ImagesViewer from "./ImagesViewer";
// Update the count down every 1 second
export default function ImagesCarrousel({ imagesArray, carModel }) {
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
      <section className="xl:flex xl:max-h-[768px] ">
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
        <div className=" flex justify-around overflow-hidden md:hidden">
          {imagesArray.slice(1, 5).map((image, index) => {
            if (index < 3) {
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
            }
            if (index === 3) {
              return (
                <div className="relative w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key"}
                    src={image}
                    height={80}
                    width={80}
                    sizes="(max-width: 768px) 20vw, 40vw"
                    alt={carModel}
                    className="object-cover"
                  />
                </div>
              );
            }
          })}
        </div>
        <div className=" hidden justify-around overflow-hidden md:flex xl:hidden">
          {imagesArray.slice(1, 10).map((image, index) => {
            if (index < 9) {
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
            }
            if (index === 9) {
              return (
                <div className="relative w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key"}
                    src={image}
                    height={80}
                    width={80}
                    sizes="(max-width: 768px) 20vw, 40vw"
                    alt={carModel}
                    className="object-cover"
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="hidden flex-wrap flex-col justify-around xl:flex">
          {imagesArray.slice(1, 10).map((image, index) => {
            if (index < 9) {
              return (
                <Image
                  key={image + "key"}
                  src={image}
                  height={160}
                  width={160}
                  sizes="40vw"
                  alt={carModel}
                  className="aspect-square min-h-full xl:min-h-fit max-w-full place-self-center object-scale-down"
                  onClick={() => handleSelected(image, index + 1)}
                />
              );
            }
            if (index === 9) {
              return (
                <div className="relative w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key"}
                    src={image}
                    height={80}
                    width={80}
                    sizes="(max-width: 768px) 20vw, 40vw"
                    alt={carModel}
                    className="object-cover max-h-fit"
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

{
  /* {restImages && (
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
          )} */
}
