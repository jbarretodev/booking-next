import { Hotel } from "@/types";

type HotelProps = {
  hotels: Hotel[];
};

const InfoHotel = (props: HotelProps) => {
  return (
    <>
      {props.hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img src={hotel.image} alt={hotel.title} />
          <hr />
          <div className="px-4 py-2">
            <h1 className="text-2xl text-center mt-3 mb-3 font-bold">
              {hotel.title}
            </h1>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: hotel.content }}
            ></div>
          </div>
          <div className="flex gap-5 px-4 py-2">
            <p className="text-gray-600">
              <span className="font-bold">Rating: </span>
              {hotel.review_score.score_total}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Price: </span>
              {hotel.price}
            </p>

            <button className="bg-cyan-600 px-4 py-2 text-white rounded-md">
              CheckOut!
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoHotel;
