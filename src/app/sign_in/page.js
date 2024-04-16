"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux-toolkit/features/signinSlice';

export default function LoginPage() {
    const router = useRouter();
    const { toast } = useToast();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        device_uuid: "123",
        app_version: "31321",
        os_version: "13213",
        device_model: "213",
        device_token: "12312",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userData = await dispatch(loginUser(credentials));
            console.log(userData);
            if (userData.payload.response.response_status == 200) {
                toast({
                    title: userData.payload.response.response_desc,
                    description: 'Sign In Successful',
                    variant: 'success',
                });
                router.push('/');

            }else{
                toast({
                    title: 'error',
                    description: userData.payload.response.response_desc,
                    variant: 'error',
                });
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast({
                title: 'Login Failed',
                description: error.message || 'Something went wrong',
                variant: 'error',
            });
        }
    };


    return (
        <div>
            <div className="flex min-h-full w-full flex-col justify-center px-8 py-12 lg:px-12">
                <div className="mx-auto w-full sm:max-w-sm lg:max-w-full mb-5">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign In
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="w-full mx-auto bg-slate-200 rounded-xl shadow-0 py-5 md:px-10 overflow-hidden md:max-w-2xl lg:max-w-5xl">
                        <div className="md:flex md:justify-evenly">
                            <div className="md:shrink-0">
                                <label
                                    htmlFor="email"
                                    className="mt-4 block text-sm font-medium uppercase leading-6 text-gray-900 me-5 max-md:text-center"
                                >
                                    Email Address
                                </label>
                            </div>
                            <div className="p-4 md:w-[600px] md:ms-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={credentials.email}
                                    onChange={handleChange}
                                    className="w-full  rounded py-1.5 text-gray-900 md:ms-[12px] shadow-sm border-[#8BB7F0] border-[1px] placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                    placeholder="Enter Your Email Address"
                                />
                            </div>
                        </div>
                        <div className="md:flex md:justify-evenly">
                            <div className="md:shrink-0">
                                <label
                                    htmlFor="password"
                                    className="mt-4 block text-sm uppercase font-medium leading-6 text-gray-900 max-md:text-center pr-5"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="p-4 md:w-[600px] md:ms-1 pr-4">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full rounded  py-1.5 text-gray-900 md:ms-3 shadow-sm border-[#8BB7F0] border-[1px] placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                    placeholder="Enter Your Password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex lg:w-1/5 md:w-1/5 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {loading ? 'Logging in...' : 'Sign In'}
                        </button>
                    </div>
                    <div className="justify-center">
                        <Link href="/register">
                            <button
                                type="button"
                                className="flex lg:w-1/5 sm:w-1/2 md:w-1/5 mx-auto justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Don't have an account? Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
