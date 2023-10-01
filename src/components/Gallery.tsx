"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  pathImages: string[];
  title: string;
};

const Gallery = ({ pathImages, title }: GalleryProps) => {
  const [imageTarget, setImageTarget] = useState<string>("");
  if (pathImages && pathImages.length > 0) {
    return (
      <>
        <div className="flex flex-wrap gap-5 justify-center mb-10">
          <div className="grid">
            {imageTarget && (
              <Image
                className="rounded"
                src={imageTarget}
                alt={title}
                width={1500}
                height={440}
              />
            )}
          </div>
          {pathImages.map((pathImage) => (
            <div className="grid" key={crypto.randomUUID()}>
              <Image
                className="shadow-md cursor-pointer rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={pathImage}
                alt={title}
                width={200}
                height={150}
                onClick={(_) => {
                  setImageTarget(pathImage);
                }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Gallery;
