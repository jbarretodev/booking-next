import { Hotel } from "@/types/hotel";
import InfoHotel from "./InfoHotel";

const getPreviewHotelBooking = async (): Promise<Hotel[] | null> => {
  let rs;
  await fetch("https://sandbox.bookingcore.co/api/hotel/search")
    .then((response) => response.json() as Promise<{ data: Hotel[] }>)
    .then((data) => (rs = data.data));

  return rs ?? null;
};

const PreviewBooking = async () => {
  const hotels: Hotel[] | null = await getPreviewHotelBooking();

  if (!hotels) return <div>No Hotels...</div>;

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mt-8 p-3">
        <InfoHotel hotels={hotels} />
      </div>
    </>
  );
};

export default PreviewBooking;
