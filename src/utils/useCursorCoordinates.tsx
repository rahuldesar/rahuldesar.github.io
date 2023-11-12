import { useState, useEffect, useRef } from "react";

export default function useCursorCoordinates() {
  const [cursorCoordinates, setCursorCoordinates] = useState<{
    clientX: any;
    clientY: any;
  }>({ clientX: 0, clientY: 0 });

  useEffect(() => {
    function getMouseCoordinates(event: MouseEvent) {
      const { clientX, clientY } = event;
      setCursorCoordinates({ clientX, clientY });
    }

    document.addEventListener("pointermove", getMouseCoordinates);

    return () => {
      document.removeEventListener("pointermove", getMouseCoordinates);
    };
  }, []);

  return cursorCoordinates;
}
