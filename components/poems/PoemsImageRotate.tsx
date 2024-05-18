"use client";
import { useEffect, useState } from "react";

const currentFav = "/logo_2023-12-08T03-20-43.png";

export default function PoemsImageRotate() {
  const [currentImage, setCurrentImage] = useState<string>(currentFav);

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
    <img
      alt={"AI Generated Poems by Frank Villasenor"}
      className={"shadow p-1 pe-0 rounded float-end rounded fluid"}
      src={currentImage}
      width={400}
      height={400}
      style={{ borderRadius: "50%" }}
    />
  );
}
