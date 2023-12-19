import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import "../../global.css";

export function Navbar({ scrollToAbout }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white mt-2">
      <div className="mx-auto flex max-w-14xl items-center justify-between px-3 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <img className="logo" src="assets/fipl.png" alt="logo" />
          <div className="navbar-heading">
            <span className="font-bold">Frugal Innovations Pvt. Ltd</span>
            <span className="sub-heading ml-4 text-lg font-normal">
              Delivering value through innovation...
            </span>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="#"
                className="anchor inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3"
              >
                Home
                <span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </a>
              <a
                onClick={scrollToAbout}
                href="#"
                className="anchor inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3 ml-5"
              >
                About
                <span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </a>
              <a
                onClick={scrollToAbout}
                href="#"
                className="anchor  inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 mt-3 ml-5"
              >
                Contacts
                <span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-1 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <img className="logo" src="assets/fipl.png" alt="logo" />
                  <div className="navbar-heading">
                    <span className="font-bold">
                      Frugal Innovations Pvt. Ltd
                    </span>
                    <span className="sub-heading ml-4 text-lg font-normal">
                      Delivering value through innovation...
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                      <span>
                        <ChevronRight className="ml-3 h-4 w-4" />
                      </span>
                    </a>
                    <a
                      onClick={scrollToAbout}
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        About
                      </span>
                      <span>
                        <ChevronRight className="ml-3 h-4 w-4" />
                      </span>
                    </a>
                    <a
                      onClick={scrollToAbout}
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contact
                      </span>
                      <span>
                        <ChevronRight className="ml-3 h-4 w-4" />
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
