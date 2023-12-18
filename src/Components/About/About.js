import React from "react";
import { MapPin } from "lucide-react";
const locations = [
  {
    title: "Office Address",
    timings: "Mon-Fri 9am to 5pm.",
    address: "Warje, Kothrud, Mumbai-Pune Highway, Near Wonder Futura, Pune - 411021",
  }
];
export function About() {
  return (
    <div>
      <div className="mx-0 max-w-14xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max">
            <p className="text-2xl font-bold">
              About us
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10 mt-3">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="map-img rounded-xl object-cover md:h-full"
            src="assets/google-map.png"
            alt=""
          />
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row bg-gray-100 rounded p-4">
          {locations.map((location) => (
            <div
              key={location.title}
              className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
            >
              <MapPin className="h-5 w-5" />
              <p className="w-full text-2xl font-semibold  text-gray-900">
                {location.title}
              </p>
              <p className="w-full text-base text-gray-700">
                {location.timings}
              </p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
