"use client";

import { HotelData } from "@/types/hotel";
import RatingStar from "@/components/RatingStar";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import GoogleMapReact from "google-map-react";

const CardHotel = ({ detailHotel }: { detailHotel: HotelData }) => {
  console.log(
    "COORDINATES",
    Number(detailHotel.map_lat),
    Number(detailHotel.map_lng)
  );
  const defaultProps = {
    center: {
      lat: Number(detailHotel.map_lat),
      lng: Number(detailHotel.map_lng),
    },
    zoom: 11,
  };

  return (
    <>
      <Card className="flex flex-wrap w-10/12">
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2">
            <RatingStar stars={Number(detailHotel.star_rate)} />
            <h1 className="text-xl text-left font-bold">{detailHotel.title}</h1>
            <span className="">{detailHotel.address}</span>
          </div>
          <div className="justify-items-end">
            <Link href="/">
              <Button gradientDuoTone="redToYellow" outline>
                <p>Back to Home!</p>
              </Button>
            </Link>
          </div>
          <div className="col-span-3 w-full mt-7 justify-items-center">
            <Gallery
              pathImages={detailHotel.gallery}
              title={detailHotel.title}
            />
          </div>
          <div className="col-span-3">
            <hr />
          </div>
          <div className="col-span-3">
            <h3 className="text-2xl font-bold">Description</h3>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: detailHotel.content }}
            ></div>
            <div className="col-span-3">
              <hr />
            </div>
            <div className="col-span-3">
              <h3 className="text-2xl mt-5 mb-5 font-bold">Location</h3>
              <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardHotel;
