import Image from "next/image";
import { useState } from "react";
// Update the count down every 1 second
export default function ImagesViewer({
  image,
  carModel,
  imagesarray,
  setInview,
  currentIndex,
  setCurrentIndex,
}) {
  const [current, setCurrent] = useState(image);

  const handleClose = (e) => {
    if (e === "section") {
      setInview(false);
    }
  };

  const handleSelect = (img, index) => {
    setCurrentIndex(index);
    setCurrent(img);
  };

  const handleButtons = (previous, next) => {
    if (previous && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrent(imagesarray[currentIndex - 1]);
    }

    if (next && currentIndex < imagesarray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrent(imagesarray[currentIndex + 1]);
    }
  };

  return (
    <section
      onClick={(e) => handleClose(e.target.localName)}
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col place-content-center place-items-center bg-black"
    >
      <div className="relative h-80 w-full">
        <div className="flex h-full w-full">
          <div
            className="z-50 h-full w-1/2"
            onClick={() => handleButtons(true, false)}
          ></div>
          <div
            className="z-50 h-full w-1/2 "
            onClick={() => handleButtons(false, true)}
          ></div>
        </div>
        <Image
          src={current}
          fill
          alt={carModel}
          className="object-scale-down"
        />
      </div>
      <div className="flex gap-1 overflow-x-scroll ">
        {imagesarray &&
          imagesarray.map((img, index) => {
            return (
              <Image
                key={img + "key"}
                src={img}
                height={80}
                width={80}
                sizes="(max-width: 768px) 20vw, 40vw"
                alt={carModel}
                className="aspect-square min-h-full max-w-full object-scale-down"
                onClick={() => handleSelect(img, index)}
              />
            );
          })}
      </div>
    </section>
  );
}
