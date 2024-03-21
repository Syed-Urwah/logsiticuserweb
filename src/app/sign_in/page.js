import React from 'react'

export default function page() {
  return (
    <div>
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
            <div className="mx-auto w-full sm:max-w-sm lg:max-w-full">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
            </div>

            <div className="mt-10 mx-auto w-full sm:max-w-sm lg:max-w-5xl">
                <form className="space-y-6" action="#" method="POST">
                    <div className='p-4 bg-slate-200 rounded-md'>
                    <div className="flex items-center w-full mt-4">
                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6"> Enter Email Address</label>
                        <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter Your Email Address'/>
                    </div>


                    <div className="flex items-center w-full mt-4">
                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900 mr-2 w-1/6"> Enter Password </label>
                        <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" placeholder='Enter Your Password '/>
                    </div>
                    </div>
                    <div className="inline-flex items-center">
                        <input type="checkbox" name="remember_pswd" id="remember_pswd" className="form-checkbox" />
                        <label for="remember_pswd" className="ml-2">Remember Password</label>
                    </div>

                    <div className="justify-center">
                        <button type="submit" className="flex w-1/2 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                    <div className="justify-center">
                        <button type="submit" className="flex w-1/2 mx-auto justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Not have an Account? Create Account</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-black-500">
                Forget Password? 
                <a href="#" className="font-semibold leading-6 text-blue-300 hover:text-blue-300">Click Here</a>
                </p>
            </div>
        </div>
    </div>
  )
}
