import React from 'react';




export default function page() {     
    return (
        <div>
            <div className='flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 md:max-w-full sm:max-w-full'>
                <div>
                    <h1 className='text-center text-xl font-bold mt-5'>Order Lists</h1>
                </div>
                <div className='flex justify-center mt-5 mb-5'>
                    <div className='flex justify-around border rounded px-5 py-7 shadow-lg'>
                        <div className='bg-[#6C63FF] p-3 rounded-full px-4'>
                            <img src='images/location.png' />
                        </div>
                        <div className='px-6'>
                            <h1 className='font-semibold'>Order #30528</h1>
                            <p className='text-gray-500'>Get Track your order.</p>
                        </div>
                        <div className='pl-5'>
                            <span className='bg-[#6C63FF] text-white px-3 py-[6px] rounded-xl'>
                                Ongoing
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
