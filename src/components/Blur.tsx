import { useRef, useEffect } from "react";
import useCursorCoordinates from "@utils/useCursorCoordinates";

const Blur = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseCoordinates = useCursorCoordinates();

  const { clientX, clientY } = mouseCoordinates as {
    clientX: string;
    clientY: string;
  };

  useEffect(() => {
    if (blobRef.current) {
      if (clientX !== undefined && clientY !== undefined) {
        let blob = blobRef.current;
        if (clientX != "0" || clientY != "0") {
          blob.style.height = "15rem";
        }

        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 950, fill: "forwards" }
        );
      }
    }
  }, [blobRef, clientX, clientY]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background ">
      <div
        ref={blobRef}
        className="translate-middle absolute aspect-square h-0 animate-custom-rotate rounded-full bg-gradient-to-r from-green-400  to-red-500  opacity-40 ease-in-out "
      ></div>
      <div
        id="blur"
        className="absolute z-10 h-full w-full backdrop-blur-[100px]"
      ></div>
    </div>
  );
};

export default Blur;
