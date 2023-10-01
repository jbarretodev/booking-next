import { Hotel } from "@/types/hotel";
import InfoHotel from "./InfoHotel";
import { getPreviewHotelBooking } from "@/api/requestBooking";

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
