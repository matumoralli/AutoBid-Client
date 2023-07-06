import Image from "next/image";
import { useState } from "react";
import ImagesViewer from "./ImagesViewer";

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
      <section className="xl:flex xl:justify-between ">
        <div className="xl:w-4/6 ">
          <Image
            key={imagesArray[0] + "key0 "}
            src={imagesArray[0]}
            width={1024}
            height={768}
            alt={carModel}
            className="object-cover"
            imagesarray={imagesArray}
            priority
            onClick={() => handleSelected(imagesArray[0], 0)}
          />
        </div>

        <div className=" flex justify-around overflow-hidden md:hidden">
          {imagesArray.slice(1, 5).map((image, index) => {
            if (index < 3) {
              return (
                <Image
                  key={image + "key1"}
                  src={image}
                  height={80}
                  width={80}
                  sizes="(max-width: 768px) 20vw, 40vw"
                  alt={carModel}
                  className="aspect-square min-h-full  max-w-full place-self-center object-scale-down"
                  onClick={() => handleSelected(image, index + 1)}
                />
              );
            }
            if (index === 3) {
              return (
                <div  key={image + "key1"} className="relative w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key1"}
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
                  key={image + "key2"}
                  src={image}
                  height={100}
                  width={100}
                  sizes="(max-width: 768px) 20vw, 40vw"
                  alt={carModel}
                  className="aspect-square min-h-full max-w-full place-self-center object-scale-down"
                  onClick={() => handleSelected(image, index + 1)}
                />
              );
            }
            if (index === 9) {
              return (
                <div  key={image + "key2"} className="relative w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key2"}
                    src={image}
                    height={100}
                    width={100}
                    sizes="(max-width: 768px) 20vw, 40vw"
                    alt={carModel}
                    className="object-cover"
                  />
                </div>
              );
            }
          })}
        </div>

        <div className="hidden w-2/6 place-items-center grid-cols-[50%,_50%] xl:grid">
          {imagesArray.slice(1, 9).map((image, index) => {
            if (index < 7) {
              return (
                <Image
                  key={image + "key3"}
                  src={image}
                  height={180}
                  width={180}
                  sizes="40vw"
                  alt={carModel}
                  className="aspect-square  max-w-full object-scale-down"
                  onClick={() => handleSelected(image, index + 1)}
                />
              );
            }
            if (index === 7) {
              return (
                <div  key={image + "key3"} className="relative h-fit w-fit">
                  <div className="absolute flex h-full w-full place-content-center place-items-center bg-black  opacity-75">
                    <p
                      onClick={() => handleSelected(image, index + 1)}
                      className="  text-center text-white"
                    >
                      Ver {imagesArray.length}
                    </p>
                  </div>
                  <Image
                    key={image + "key3"}
                    src={image}
                    height={180}
                    width={180}
                    sizes="40vw"
                    alt={carModel}
                    className="aspect-square  max-w-full object-scale-down "
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
