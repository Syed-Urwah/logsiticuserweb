"use client"
import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <div> 
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 md:max-w-full sm:max-w-full'>
            <div className='mx-auto w-full sm:max-w-sm lg:max-w-full mb-5'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign In</h2>
            </div>
            <form className='space-y-6' action="#" method="POST">
                <div className='w-full mx-auto bg-slate-200 rounded-xl py-5 md:px-10 shadow-0 overflow-hidden md:max-w-2xl lg:max-w-5xl'>
                    <div className='md:flex'>
                        <div className='md:shrink-0'>
                            <label htmlFor="email" className='mt-4 block text-sm font-medium leading-6 text-gray-900 mr-2 pl-3'> Enter Email Address</label>

                        </div>
                        <div className="p-4 w-[600px]">
                            <input id="email" name="email" type="email" autoComplete="email" required className='w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' placeholder='Enter Your Email Address'/>

                        </div>
                    </div>
                    <div className='md:flex'>
                        <div className='md:shrink-0'>
                            <label htmlFor="email" className='mt-4 block text-sm font-medium leading-6 text-gray-900 mr-2 pl-3 pr-6'> Enter Password</label>

                        </div>
                        <div className='p-4 w-[600px] md:ms-1 pr-4'>
                            <input id="email" name="email" type="email" autoComplete="email" required className='w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2' placeholder='Enter Your Password'/>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto bg-white md:max-w-2xl lg:max-w-5xl'>
                    <div className='md-flex'>
                        <input type="checkbox" name="remember_pswd" id="remember_pswd" className='form-checkbox' />
                        <label htmlFor="remember_pswd" className='ml-2'>Remember Password</label>
                    </div>
                </div>

                <div className='justify-center'>
                    <button type="submit" className='flex lg:w-1/5 md:w-1/5 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Sign in</button>
                </div>
                <div className='justify-center'>
                    <Link href="/register">
                    <button type="submit" className='flex lg:w-1/5 sm:w-1/2 md:w-1/5 mx-auto justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'> Not have an Account? Create Account</button>
                    </Link>
                </div>
            </form>
                <p className='mt-10 text-center text-sm text-black-500'>Forget Password? 
                <Link href="#" className='font-semibold leading-6 text-blue-300 hover:text-blue-300'>Click Here</Link>
                </p>
        </div>
    </div>
  )
}
