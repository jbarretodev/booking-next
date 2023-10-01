import { Hotel } from "@/types/hotel";
import Link from "next/link";
import Image from "next/image";

const InfoHotel = ({ hotels }: { hotels: Hotel[] }) => {
  return (
    <>
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-lg hover:shadow-xl shadow-md overflow-hidden"
        >
          <Image
            src={hotel.image}
            alt={hotel.title}
            height={500}
            width={500}
            loading="lazy"
          />
          <hr />
          <div className="px-4 py-2">
            <Link href={`/hotel/${hotel.title}`}>
              <h1 className="text-2xl text-center mt-3 mb-3 font-bold hover:underline">
                {hotel.title}
              </h1>
            </Link>
            <div
              className="text-gray-600 line-clamp-6"
              dangerouslySetInnerHTML={{ __html: hotel.content }}
            ></div>
          </div>
          <div className="flex gap-5 px-4 py-2">
            <p className="text-gray-600">
              <span className="font-bold">Rating: </span>
              {hotel.review_score.score_total}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Price: </span>${hotel.price}
            </p>

            <Link href={`/hotel/${hotel.title}`}>
              <button className="bg-cyan-600 px-4 py-2 text-white rounded-md">
                Info
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoHotel;
