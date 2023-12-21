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
            <p className="about-us text-2xl text-indigo-600 text-start font-bold">
              About us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-5">
            <div className="border rounded p-4 bg-blue-50">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 mb-4">
                <AirVent className="h-9 w-9 text-white" />
              </div>
              <p className="text-xl text-center font-bold text-gray-900 md:text-2xl md:leading-10 mt-2">
                Reversing the impact of Climate change is the need of hour.
              </p>
              <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl mt-4">
                We at Frugal Innovations have realized it and are striving to
                decarbonize the energy and transport sectors.
              </p>
            </div>
            <div className="border rounded bg-pink-50  p-4 md:p-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 mb-4">
                <Lightbulb className="h-9 w-9 text-white" />
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

        <div className="about-location grid grid-cols-1 md:grid-cols-2 gap-5 md:p-5">
          <div className="w-full space-y-4">
            <img
              className="map-img object-cover md:h-full"
              src="assets/google-map.png"
              alt=""
            />
          </div>
          {/* locations */}
          <div className="flex flex-col bg-gray-100 border rounded p-4">
            {locations.map((location, index) => (
              <div key={index}>
                <div className="md:mx-5 max-w-14xl">
                  <div className="flex flex-col space-y-8">
                    <p className="text-xl md:text-2xl text-indigo-600 font-bold">
                      Reach us
                    </p>
                  </div>
                  <div className="flex items-center justify-center rounded-lg  bg-indigo-600 h-10 w-10 top-0 left-0 mt-3 mb-2">
                    <MailCheck className="h-6 w-6 text-white " />
                  </div>
                  <p className="text-md md:text-xl font-bold text-gray-800 md:leading-10">
                    Email: {location.email}
                  </p>
                  <div className="flex items-center justify-center rounded-lg  bg-indigo-600 h-10 w-10 top-0 left-0 mt-4 mb-2">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-md font-bold md:text-xl text-gray-800">
                    Contact No: {location.contact}
                  </p>

                  <div
                    key={location.title}
                    className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
                  >
                     <div className="flex items-center justify-center rounded-lg  bg-indigo-600 h-10 w-10 top-0 left-0 mt-3 mb-2">
                    <MapPin className="h-6 w-6 text-white " />
                  </div>
                    <p className="wrap-text w-full text-xl md:text-2xl font-bold text-indigo-600">
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
