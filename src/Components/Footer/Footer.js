import React from "react";
import "../../App.css";

export function Footer() {
  return (
    <footer className="w-full mt-2 mb-3">
      <hr className="my-4" />
      <div className="mx-2 max-w-14xl items-center justify-between px-3 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img className="logo" src="assets/fipl.png" alt="logo" />
          <div className="footer-text">
            <span className="ml-4 text-lg font-bold">
              Frugal Innovations Pvt. Ltd
            </span>
            <span className="footer-sub-text ml-4 text-lg font-normal">
              Delivering value through innovation...
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 Frugal Innovations Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
