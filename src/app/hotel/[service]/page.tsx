"use client";
import Gallery from "@/components/Gallery";
import RatingStar from "@/components/RatingStar";
import { DetailHotel, Hotel, HotelData, ServiceHotel } from "@/types/hotel";
import { Card, Rating } from "flowbite-react";
const getServiceHotel = (title: string) => {
  return fetch(
    `https://sandbox.bookingcore.co/api/hotel/search?service_name=${title}`
  )
    .then((response) => response.json() as Promise<{ data: ServiceHotel }>)
    .then((data) => {
      return data.data as Hotel[];
    });
};

const getDetailHotel = (id: number): Promise<HotelData> => {
  return fetch(`https://sandbox.bookingcore.co/api/hotel/detail/${id}`)
    .then((response) => response.json() as Promise<{ data: DetailHotel }>)
    .then((data) => {
      return data.data as HotelData;
    });
};

const HotelDetailPage = async ({ params }: { params: { service: string } }) => {
  const serviceHotel = await getServiceHotel(params.service);
  const detailtHotel = await getDetailHotel(serviceHotel[0].id);
  console.log(detailtHotel.gallery);
  return (
    <>
      <main>
        <section className="mt-12">
          <img src={detailtHotel.banner_image} alt={detailtHotel.title} />
        </section>

        <section className="flex pb-10 flex-col border-black items-center justify-center mt-12">
          <Card className="w-3/4">
            <RatingStar stars={Number(detailtHotel.star_rate)} />
            <h1 className="text-xl text-left font-bold">
              {detailtHotel.title}
            </h1>
            <span className="">{detailtHotel.address}</span>
            <Gallery
              pathImages={detailtHotel.gallery}
              title={detailtHotel.title}
            />
          </Card>
        </section>
      </main>
    </>
  );
};

export default HotelDetailPage;
