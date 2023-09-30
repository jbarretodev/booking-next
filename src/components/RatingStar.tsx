"use client";
import { Rating } from "flowbite-react";

type Props = {
  stars: number;
};

const RatingStar = ({ stars }: Props) => {
  return (
    <>
      <Rating>
        {Array.from({ length: stars }, (_, index) => (
          <Rating.Star key={crypto.randomUUID()} />
        ))}
      </Rating>
    </>
  );
};

export default RatingStar;
