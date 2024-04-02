"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function page() {

  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const [user, setUser] = useState({
    username: "",
    mobile_number: "1234697",
    email: "",
    id_card_no: "",
    password: "",
    profile_image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)

    const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api/customer/register'

    try {
      // Create a new FormData object
      var formData = new FormData();

      // Append each key-value pair from the user object to the FormData object
      Object.keys(user).forEach(key => {
        formData.append(key, user[key]);
      });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          // "X-CSRF-TOKEN": csrfToken,
          "Api-Token": "N5ORjSS300F4fcZ3eq69rLShvgwnjchQg7Vmt5N753Sy"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setRegistrationSuccess(true);
      } else {
        alert("registration Failed");
      }
    } catch (error) {
      console.log(error);
      alert("registration Failed");
    }

  }

  return (
    <div>
      {registrationSuccess ? ( // Conditionally render the alert if registration is successful
        <Alert status="success">
          <AlertTitle>Registration Successful</AlertTitle>
          <AlertDescription>
            Your registration has been successful.
          </AlertDescription>
        </Alert>
      ) : null}
      <div className="flex min-h-full w-full flex-col justify-center px-6 py-12 lg:px-10">
        <div className="mx-auto w-full sm:max-w-sm lg:max-w-full mb-5">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="w-full mx-auto bg-slate-200 rounded-xl shadow-0 py-5 md:px-10 overflow-hidden md:max-w-2xl lg:max-w-5xl">
            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="username"
                  className="mt-4 block text-sm font-medium uppercase leading-6 text-gray-900 mr-2 pl-3"
                >
                  ENTER USERNAME
                </label>
              </div>
              <div className="p-4 md:w-[600px] md:ms-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your USERNAME "
                  onChange={(e) => {
                    setUser((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="email"
                  className="mt-4 block text-sm font-medium uppercase leading-6 text-gray-900 mr-2 pl-3"
                >
                  {" "}
                  Enter Email Address
                </label>
              </div>
              <div className="p-4 md:w-[600px]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setUser((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="id_card"
                  className="mt-4 block text-sm uppercase font-medium leading-6 text-gray-900 mr-2 pl-3"
                >
                  ID CARD NO.
                </label>
              </div>
              <div className="p-4 md:w-[600px] md:ms-12">
                <input
                  id="id_card"
                  name="id_card"
                  type="text"
                  autoComplete="id_card"
                  required
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setUser((prev) => ({
                      ...prev,
                      id_card_no: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="password"
                  className="mt-4 block text-sm uppercase font-medium leading-6 text-gray-900 mr-2 pl-3 pr-6"
                >
                  {" "}
                  Enter Password
                </label>
              </div>
              <div className="p-4 md:w-[600px] md:ms-1 pr-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your Password"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setUser((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="mobile_number"
                  className="mt-4 block text-sm uppercase font-medium leading-6 text-gray-900 mr-2 pl-3"
                >
                  {" "}
                  Enter Mobile Number
                </label>
              </div>
              <div className="p-4 md:w-[600px]">
                <input
                  id="mobile_number"
                  name="mobile_number"
                  type="number"
                  min='1'

                  className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setUser((prev) => ({
                      ...prev,
                      mobile_number: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:justify-start">
              <div className="md:shrink-0">
                <label
                  htmlFor="profile_picture"
                  className="mt-4 block text-sm uppercase font-medium leading-6 text-gray-900 mr-2 pl-3"
                >
                  {" "}
                  Select Profile Picture
                </label>
              </div>
              <div className="p-4 md:w-[600px]">
                <input
                  id="profile_picture"
                  name="profile_picture"
                  type="file"
                  required
                  className="w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setUser((prev) => ({
                      ...prev,
                      profile_image: e.target.files[0],
                    }));
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full mx-auto bg-white md:max-w-2xl lg:max-w-5xl">
            <div className="md-flex">
              <input
                type="checkbox"
                name="remember_pswd"
                id="remember_pswd"
                className="form-checkbox"
              />
              <label htmlFor="remember_pswd" className="ml-2">
                Agree with terms and conditions
              </label>
            </div>
          </div>

          <div className="justify-center">
            <Button
              type="submit"
              className="flex lg:w-1/5 md:w-1/5 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Button>
          </div>
          <div className="justify-center">
            <Link href="/sign_in">
              <button
                className="flex lg:w-1/5 sm:w-1/2 md:w-1/5 mx-auto justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Already have Account? Sign In
              </button>
            </Link>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-black-500">
          By creating an account you agree to
          <br />
          <a
            href="#"
            className="font-semibold leading-6 text-blue-300 hover:text-blue-300"
          >
            Our Terms of Use and Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
