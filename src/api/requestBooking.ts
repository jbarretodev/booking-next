import { DetailHotel, Hotel, HotelData, ServiceHotel } from "@/types/hotel";

export const getServiceHotel = async (title: string) => {
  let response = await fetch(
    `https://sandbox.bookingcore.co/api/hotel/search?service_name=${title}`
  );
  let data: { data: ServiceHotel } = await response.json();
  return data.data as Hotel[];
};

export const getDetailHotel = async (id: number): Promise<HotelData> => {
  let response = await fetch(
    `https://sandbox.bookingcore.co/api/hotel/detail/${id}`
  );
  let data: { data: DetailHotel } = await response.json();
  return data.data as HotelData;
};

export const getPreviewHotelBooking = async (): Promise<Hotel[] | null> => {
  let rs;
  await fetch("https://sandbox.bookingcore.co/api/hotel/search")
    .then((response) => response.json() as Promise<{ data: Hotel[] }>)
    .then((data) => (rs = data.data));

  return rs ?? null;
};
