"use client";

import { Button, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Newheader() {
  return (
    <div>
      <div className="flex justify-evenly items-start pt-1 bg-indigo-500 lg:h-14 h-14 w-screen">
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
      <Navbar
        fluid
        rounded
        className="mt-[-55px]"
        style={{ backgroundColor: "transparent" }}
      >
        <Navbar.Brand as={Link} href="#">
          <div className="lg:ms-10 md:ms-10 max-sm:ms-[10px]">
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="Vercel Logo"
                width={100}
                height={30}
                className="pt-2"
                priority
              />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="lg:mt-12 lg:me-[17%] ">
          <Navbar.Link href="#" active className="text-base font-semibold">
            HOME
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="#"
            className="text-base font-semibold lg:ms-10"
          >
            SERVICES
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-base font-semibold lg:ms-10 me-10"
          >
            APPS
          </Navbar.Link>

          <Dropdown
            label="BOOKING"
            inline
            className="text-base font-semibold ms11"
          >
            <Dropdown.Item>Book a ride</Dropdown.Item>
            <Dropdown.Item>Order placement</Dropdown.Item>
          </Dropdown>

          <Navbar.Link
            href="#"
            className="text-base font-semibold lg:ms-10 lg:me-10"
          >
            TRACKING
          </Navbar.Link>

          <button className="bg-blue-300 h-[30px] w-[150px] text-white rounded-lg">
            Register Yourself
          </button>
          {/* <Button color="blue">Blue</Button> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
