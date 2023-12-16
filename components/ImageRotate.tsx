"use client";
import Image from "react-bootstrap/Image";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

function shuffleArray(array: string[]): string[] {
  // Might be overkill.
  for (let i = 0; i < 100; i++) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap elements
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }
  return array;
}

const currentFav = "/logo_2023-12-08T03-20-43.png";

export default function ImageRotate() {
  const [currentImage, setCurrentImage] = useState<string>(currentFav);
  //const [imageStack, setImageStack] = useState<string[]>([...refList]);

  useEffect(() => {
    const refList = Object.freeze([
      "/logo_2023-12-04T18-59-05.png",
      "/logo_2023-12-04T19-11-38.png",
      "/logo_2023-12-04T19-14-19.png",
      "/logo_2023-12-08T03-11-37.png",
      "/logo_2023-12-08T03-15-42.png",
      currentFav,
    ]);
    const selected =
      refList.at(Math.floor(Math.random() * refList.length)) || currentFav;
    setCurrentImage(selected);
  }, []);

  return (
    <Image
      alt={"AI Generated Poems by Frank Villasenor"}
      className={"shadow p-1 pe-0 rounded float-end rounded fluid"}
      src={currentImage}
      width={400}
      height={400}
      roundedCircle={true}
    />
  );
}
