import React from "react";
import { MapPin, MailCheck, PhoneCall, AirVent, Lightbulb } from "lucide-react";

const locations = [
  {
    email: "mvk@frugalinnovations.co.in",
    contact: "9284454879",
    title: "Office Address",
    timings: "Mon-Fri 9am to 5pm.",
    address:
      "Warje, Kothrud, Mumbai-Pune Highway, Near Wonder Futura, Pune - 411021",
  },
];
export function About() {
  return (
    <div>
      <div className="mx-0 max-w-14xl px-4">
        {/* Hero Map */}
        <div
          id="about"
          className="flex items-center flex-col space-y-8 pb-10 pt-12 md:pt-24"
        >
          <div className="max-w-max">
            <p className="about-us text-2xl text-start font-bold">About us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-24">
            <div className="border rounded p-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
                <AirVent className="h-9 w-9 text-gray-700" />
              </div>
              <p className="text-xl text-center font-bold text-gray-900 md:text-2xl md:leading-10 mt-2">
                Reversing the impact of Climate change is the need of hour.
              </p>
              <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl mt-4">
                We at Frugal Innovations have realized it and are striving to
                decarbonize the energy and transport sectors.
              </p>
            </div>
            <div className="border rounded p-4 md:p-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
                <Lightbulb className="h-9 w-9 text-gray-700" />
              </div>
              <p className="text-xl text-center font-bold text-gray-900 md:text-2xl md:leading-10 mt-2">
                Our innovative solutions are designed to
              </p>
              <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl">
                - Reduce idle running of vehicles by allowing the customer to
                book a nearest vehicle.
              </p>
              <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl">
                - Power electric vehicles using energy supplied directly by
                conductors
              </p>
              <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl">
                - Harness wind energy using vertical axis wind turbine on
                highways and railway corridors
              </p>
            </div>
          </div>
        </div>

        <div className="about-location grid grid-cols-1 md:grid-cols-2 gap-5 md:px-24">
          <div className="w-full space-y-4 border rounded">
            <img
              className="map-img rounded-xl object-cover md:h-full"
              src="assets/google-map.png"
              alt=""
            />
          </div>
          {/* locations */}
          <div className="flex flex-col bg-gray-50 border rounded p-4">
            {locations.map((location, index) => (
              <div key={index}>
                <div className="md:mx-5 max-w-14xl">
                  <div className="flex flex-col space-y-8">
                    <p className="text-2xl font-bold">Reach us</p>
                  </div>
                  <MailCheck className="h-5 w-5 mb-2" />
                  <p className="text-md md:text-xl font-bold text-gray-800 md:leading-10">
                    Email: {location.email}
                  </p>
                  <PhoneCall className="h-5 w-5 mb-2 mt-3" />
                  <p className="text-md font-bold md:text-xl text-gray-800 pb-3">
                    Contact No: {location.contact}
                  </p>

                  <div
                    key={location.title}
                    className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
                  >
                    <MapPin className="h-5 w-5" />
                    <p className="wrap-text w-full text-2xl font-semibold text-gray-900">
                      {location.title}
                    </p>
                    <p className="wrap-text w-full md:text-xl text-base text-gray-700">
                      {location.timings}
                    </p>
                    <p className="wrap-text w-full text-sm md:text-xl font-bold-500">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
