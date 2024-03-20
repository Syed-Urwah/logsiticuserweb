import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-indigo-500 h-12">
      <div className="flex justify-around">
        <div>
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

        <div>
          <a href="#" className="flex mt-3">
            <img
              src="/images/location.png"
              alt="Vercel Logo"
              className="h-5 me-3"
            />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              xyz road, Riyadh, Saudia Arabia
            </p>
          </a>
        </div>

        <div>
          <a href="#" className="flex mt-3">
            <img src="/images/phone.png" alt="phone" className="h-5 me-3" />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              0335-3915158
            </p>
          </a>
        </div>

        <div className="flex mt-3">
          <a href="#">
            <img src="/images/notifi.png" alt="phone" className="h-5 me-14" />
          </a>
          <a href="#">
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              CALL US NOW
            </p>
          </a>
        </div>
      </div>

      <nav className="flex"></nav>
    </header>
  );
}
