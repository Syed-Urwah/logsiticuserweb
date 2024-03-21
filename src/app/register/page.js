import React from 'react'
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-5'>
        <div className="mx-auto w-full sm:max-w-sm lg:max-w-full">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registration</h2>
        </div>

        <div className="mt-10 mx-auto w-full sm:max-w-sm lg:max-w-5xl">
          <form className="space-y-6" action="#" method="POST">
            <div className='p-4 pb-6 bg-slate-200 rounded-md'>
              <div className="flex items-center w-full mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6"> Enter Username </label>
                <input id="email" name="username" type="text" required className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter Your Username ' />
              </div>
              <div className="flex items-center w-full mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6"> Enter Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter Your Email Address' />
              </div>
              <div className="flex items-center w-full mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6">ID Card No.</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter ID Card No.' />
              </div>


              <div className="flex items-center w-full mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6"> Enter Password </label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter Your Password ' />
              </div>
            </div>
            <div className="inline-flex items-center">
              <input type="checkbox" name="remember_pswd" id="remember_pswd" className="form-checkbox" />
              <label htmlFor="remember_pswd" className="ml-2">Agree with terms and conditions</label>
            </div>

            <div className="justify-center">
              <button type="submit" className="flex w-1/2 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register Now</button>
            </div>
            <div className="justify-center">
              <button type="submit" className="flex w-1/2 mx-auto justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Already have Account? Sign In</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-black-500">
          By creating an account you agree to<br/>
            <a href="#" className="font-semibold leading-6 text-blue-300 hover:text-blue-300">Our Terms of Use and Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}
