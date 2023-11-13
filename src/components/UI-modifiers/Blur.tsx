import { useRef, useEffect, useState } from "react";
import useCursorCoordinates from "@utils/useCursorCoordinates";
import useScrollTop from "@utils/useScrollTop";

const Blur = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseCoordinates = useCursorCoordinates();
  const scrollTop = useScrollTop();

  const { clientX, clientY } = mouseCoordinates as {
    clientX: string;
    clientY: string;
  };

  useEffect(() => {
    if (blobRef.current) {
      if (clientX !== undefined && clientY !== undefined) {
        let blob = blobRef.current;
        const top = clientY + scrollTop;
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${top}px`,
          },
          { duration: 2500, fill: "forwards" }
        );
      }
    }
  }, [blobRef, clientX, clientY, scrollTop]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background ">
      <div
        ref={blobRef}
        className="translate-middle absolute aspect-square h-60 animate-custom-rotate rounded-full bg-gradient-to-r from-catDarkGreen  to-catDarkRosewater opacity-30 ease-in-out"
      ></div>
      <div
        id="blur"
        className="absolute z-10 h-full w-full backdrop-blur-[120px]"
      ></div>

      <div className="rounded-[67%] rounded-t-[33%] rounded-r-[100%] rounded-b-[0%] 
            rounded-tl-[100%] rounded-tr-[26%] rounded-br-[74%] rounded-bl-[0%] h-60 animate-custom-rotate rounded-full bg-gradient-to-r from-green-400  to-red-500 opacity-30 ease-in-out  top-50 left-3/4 z-20 absolute">
      </div>
    </div>
  );
};

export default Blur;
