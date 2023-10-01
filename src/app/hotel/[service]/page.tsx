import CardHotel from "@/components/CardHotel";
import { getDetailHotel, getServiceHotel } from "@/api/requestBooking";
import Image from "next/image";

const HotelDetailPage = async ({ params }: { params: { service: string } }) => {
  const serviceHotel = await getServiceHotel(params.service);
  const detailHotel = await getDetailHotel(serviceHotel[0].id);

  return (
    <>
      <main>
        <section className="mt-12">
          {detailHotel.title && detailHotel.banner_image && (
            <Image
              src={detailHotel.banner_image}
              alt={detailHotel.title}
              width={1534}
              height={484.41}
            />
          )}
        </section>

        <section className="flex pb-10 flex-col border-black items-center justify-center mt-12">
          <CardHotel detailHotel={detailHotel} />
        </section>
      </main>
    </>
  );
};

export default HotelDetailPage;
