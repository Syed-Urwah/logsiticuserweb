"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dropdown } from "flowbite-react";

export default function MyNavbar() {
  return (
    <header className="border-b-[3px] border-solid shadow shadow-gray-300 w-full">
      <div className="flex justify-evenly max-md:hidden items-start pt-1 bg-[#6C63FF] lg:h-14 h-14">
        <div className="max-sm:hidden">
          <Link href="#" className="flex mt-3 text-white">
            <img
              src="/images/location.png"
              alt="Vercel Logo"
              className="h-5 me-3"
            />
            <p
              style={{
                fontFamily: "Scada",
                fontWeight: 600,
                fontSize: 17,
              }}
            >
              xyz road, Riyadh, Saudia Arabia
            </p>
          </Link>
        </div>

        <div className="max-sm:ms-[80px]">
          <Link href="#" className="flex mt-3 text-white">
            <img src="/images/phone.png" alt="phone" className="h-5 me-3" />
            <p
              style={{
                fontFamily: "Scada",
                fontWeight: 600,
                fontSize: 17,
              }}
            >
              0335-3915158
            </p>
          </Link>
        </div>

        <div className="flex mt-3 text-white items-center me-10">
          <Link href="#">
            <img src="/images/notifi.png" alt="phone" className="h-5 me-14" />
          </Link>
          <Link href="#">
            <p
              style={{
                fontFamily: "Scada",
                fontWeight: 600,
                fontSize: 17,
              }}
            >
              CALL US NOW
            </p>
          </Link>
        </div>
      </div>
      <nav className="dark:bg-gray-900 max-md:bg-indigo-500 max-md:h-14 lg:mt-[-30px] pb-3 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            href="/"
            className="flex items-center z-10	 space-x-3 rtl:space-x-reverse lg:ms-[-85px]"
          >
            <img
              src="images/logo.png"
              className="h-[100px] md:mt-[-20px] max-md:ms-3"
              alt="Flowbite Logo"
            />
          </Link>

          <Sheet>
            <SheetTrigger className="max-md:mt-[-25px] max-md:me-[10px]">
              <div
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center w-10 h-10 justify-center max-md:mt-[-20px] text-sm text-white rounded-lg md:hidden hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent className='bg-white'>
              <SheetHeader>
                <SheetTitle>
                  <div className=" items-center pt-1 bg-indigo-500 rounded-lg  h-[140px] ms-[-10px] mt-[-20px] w-[100%]">
                    <div>
                      <Link href="#" className="flex mt-3 text-white">
                        <img
                          src="/images/location.png"
                          alt="Vercel Logo"
                          className="h-5 me-3 max-sm:ms-4"
                        />
                        <p
                          style={{
                            fontFamily: "Scada",
                            fontWeight: 600,
                            fontSize: 17,
                          }}
                        >
                          xyz road, Riyadh, Saudia Arabia
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="#" className="flex mt-3 text-white">
                        <img
                          src="/images/phone.png"
                          alt="phone"
                          className="h-5 me-3 max-sm:ms-4"
                        />
                        <p
                          style={{
                            fontFamily: "Scada",
                            fontWeight: 600,
                            fontSize: 17,
                          }}
                        >
                          0335-3915158
                        </p>
                      </Link>
                    </div>

                    <div className="flex mt-3 text-white items-center me-10">
                      <Link href="#">
                        <img
                          src="/images/notifi.png"
                          alt="phone"
                          className="h-5 lg:me-14 max-sm:me-2 max-sm:ms-4"
                        />
                      </Link>
                      <Link href="#">
                        <p
                          style={{
                            fontFamily: "Scada",
                            fontWeight: 600,
                            fontSize: 17,
                          }}
                        >
                          CALL US NOW
                        </p>
                      </Link>
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div>
                    <ul className="flex flex-col items-center">
                      <li>
                        <Link
                          href="/home"
                          className="block py-2 px-[150px] text-white md:ms-10 text-base font-semibold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page"
                        >
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          className="block py-2 px-[150px] text-gray-900 md:ms-10 rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          SERVICES
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-[150px] text-gray-900  rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center"
                        >
                          APPS
                        </Link>
                      </li>
                      <li className="block py-2 px-[150px] text-gray-900 md:ms-10 rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">
                        <Dropdown
                          label="BOOKING"
                          inline
                          className="text-base font-semibold ms11"
                        >
                          <Dropdown.Item>
                            <Link href="/book-a-ride">Book a ride</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/order-placement">Order placement</Link>
                          </Dropdown.Item>
                        </Dropdown>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-[150px] text-gray-900 text-center rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          TRACKING
                        </Link>
                      </li>

                      <li>
                        <Link href="/register">
                          <button className="bg-blue-300 h-[35px] w-[150px] mt-3 text-white rounded-lg">
                            Register Yourself
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div
            className="hidden w-full md:me-[5%] lg:me-[13%] mt-10 md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/home"
                  className="block py-2 px-3 text-white lg:ms-10 text-base font-semibold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-gray-900 lg:ms-10 rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 lg:ms-10 me-10 rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  APPS
                </Link>
              </li>
              <li className="text-base font-semibold">
                <Dropdown
                  label="BOOKING"
                  inline
                  className="text-base font-semibold ms11"
                >
                  <Dropdown.Item>
                    <Link href="/book-a-ride">Book a ride</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="#">Order placement</Link>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-2 text-gray-900 lg:ms-5 rounded text-base font-semibold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  TRACKING
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <button className="bg-blue-300 ms-10 h-[35px] w-[150px] mt-[-3px] text-white rounded-lg">
                    Register Yourself
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
