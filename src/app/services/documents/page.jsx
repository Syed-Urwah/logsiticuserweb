import React from 'react'

const ServicesDocuments = () => {
    return (
        <div>
            <div className="bg-[#F3F4F9] px-5 sm:px-10 md:px-20 py-8">
                <h1 className="text-[25px] text-2xl md:text-4xl lg:text-[45px] leading-snug font-extrabold w-[90%] text-center mx-auto">
                    Apaale: Your One-Stop Shop for <br />Secure & Speedy Logistics Documents
                </h1>
                <p className="py-5 text-[19px] text-justify">
                    In the broad realm of logistics, where products are moved between countries and continents, Documentation is essential to maintaining efficient operations. Leading logistics software company Apaale provides solutions that simplify this procedure, enabling companies to more easily handle their shipments.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-5 mt-10 px-5 sm:px-10 md:px-20 py-7 pb-14 ">
                <div className="w-full md:w-[47%] min-h-[54vh]">
                    <h2 className=" text-2xl md:text-3xl font-bold">Logistic Documents: <br />what are they?</h2>
                    <div>
                        <p className='text-justify text-[19px] mt-5'>
                            The paperwork related to the transportation of commodities from one location to another is known as logistical documentation. They provide several vital functions, including financial transactions, regulatory compliance, and easing the movement of commodities throughout the supply chain. Stakeholders can track and control shipments with the assistance of this information trail provided by these documents.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[47%] bg-slate-200 rounded-xl min-h-[54vh]"></div>
            </div>

            <div className="px-5 sm:px-10 md:px-20 bg-[#F3F4F9] py-12">
                <h3 className='text-center font-bold text-2xl sm:text-3xl'>Use of Documentation</h3>
                <p className='text-lg md:text-[19px] text-justify mt-5'>The goods document maps travels as well as numerous pickups and stops and is vital to printing and transferring planning outcomes. Logistics documentation can be generated mechanically or manually. In Customizing for Transportation Management (TM), you specify the kind of goods document. It includes all of the goods document's crucial control parameters.</p>
                <p className='text-lg md:text-[19px] text-justify mt-4'>In the goods document, you can manually set statuses such as "Transportation Completed." In this instance, every bill of lading included in the goods document has its status automatically set. After that, these print automatically. </p>
            </div>

            {/* types of logistics documentation  */}
            <div className="mt-12 md:mt-20 px-5 sm:px-10 md:px-20 py-12">
                <div className="">
                    <h2 className='text-3xl mb-10 font-bold text-center'>Types of Logistics Documents</h2>
                </div>

                <div className=" p-2 mt-7  pb-14 grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2">

                    <div className="sm:border-b-2 sm:border-r-2 sm:pr-7 sm:pb-5 border-[#29B473]/30 ">
                        <h3 className='text-[#6C63FF] font-bold mb-2 '>Commercial invoices</h3>
                        <p className='text-[#7D7D7E] text-justify'>One of the most crucial documents is the commercial invoice. It is the bill that the buyer (importer) receives from the seller (exporter). To clear customs, it is necessary. The platform from Apaale automates the production of business invoices while guaranteeing correctness and adherence to global standards.</p>
                    </div>

                    <div className="border-b-2 border-t-2 sm:border-t-0 pb-5 pt-5 sm:pt-0 sm:pl-7 sm:pb-5 border-[#29B473]/30 ">
                        <h3 className='text-[#6C63FF] font-bold mb-2'>Custom Declaration</h3>
                        <p className='text-[#7D7D7E] text-justify'> The specifics of the products that are imported or exported are listed in an export or import customs declaration. To put it legally, someone expresses their desire to place items under a certain customs process by submitting a Customs Declaration. The Declaration is used to compute any relevant tariffs or taxes on the shipment as well as for customs clearance.</p>
                    </div>

                    <div className="sm:border-r-2 border-b-2 sm:border-b-0 pb-5 sm:pb-0 sm:pt-5 pr-7 border-[#29B473]/30">
                        <h3 className='text-[#6C63FF] font-bold mb-2'>The Origin Certificate</h3>
                        <p className='text-[#7D7D7E] text-justify'>The document that states the nation in which a thing or commodity was made is called a Certificate of Origin. It is frequently required. The solution provided by Apaale makes it easier for companies to comply with intricate international trade laws by streamlining the issue of certificates of origin.</p>
                    </div>

                    <div className="sm:pt-5 sm:pl-7">
                        <h3 className='text-[#6C63FF] font-bold mb-2'>Packaging List</h3>
                        <p className='text-[#7D7D7E] text-justify'>This document lists every item in a shipment, along with product specifications, quantities, and packing information. Apaale makes it easy for users to create packing lists, which lowers mistakes and enhances inventory control.</p>
                    </div>
                </div>
            </div>

            {/* Benefits of Apaale's */}
            <div className="px-5 sm:px-10 md:px-20 py-16">
                <div className="pb-8">
                    <h2 className='text-3xl font-bold text-center'>The Benefit of Apaale</h2>
                    <p className='text-center text-[19px] py-6'>What distinguishes Apaale from its rivals is as follows:</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 lg:gap-5 lg:flex-wrap ">

                    <div className="w-full md:w-[30%] p-4 max-w-[400px] border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-xl text-[#6C63FF] text-center font-semibold'>Unrivalled Dependability <br /> and Speed</h3>
                        <p className='text-justify pt-2'>Every time, we deliver your documents to their proper location on schedule.</p>
                    </div>

                    <div className=" w-full md:w-[30%] max-w-[400px] p-4 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-xl text-center text-[#6C63FF] font-semibold'>Extensive Security <br /> Measures</h3>
                        <p className='text-justify pt-2'> The protection and security of your private papers are
                            our top priorities.</p>
                    </div>

                    <div className="w-full md:w-[30%] max-w-[400px] p-4 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-xl text-[#6C63FF] text-center font-semibold'>Scalable <br /> Solutions</h3>
                        <p className='text-justify pt-2'> We offer a wide range of services to meet the demands and sizes of enterprises.</p>
                    </div>
                </div>
                <div className="flex flex-col pt-6 md:pt-12 md:flex-row justify-center items-center md:items-stretch gap-5 lg:gap-12 lg:flex-wrap ">
                    <div className="w-full md:w-[40%] lg:w-[30%] max-w-[400px] p-4 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-xl text-[#6C63FF] text-center font-semibold'>Unwavering Customer <br /> Service</h3>
                        <p className='text-justify pt-2'>Delivering a smooth and customized experience is our main priority.</p>
                    </div>
                    <div className=" w-full md:w-[40%] lg:w-[30%] max-w-[400px] p-4 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-xl text-[#6C63FF] text-center font-semibold'>Tech-Driven <br /> Efficiency</h3>
                        <p className='text-justify pt-'> We've streamlined the document freight process with our mobile app and web portal.</p>
                    </div>

                </div>
            </div>

            {/* Ease of logistic document */}
            <div className="px-5 sm:px-10 md:px-20 py-16">
                <div className="pb-8">
                    <h2 className='text-3xl font-bold text-center'>The Ease of Logistic Document Management with Apaale</h2>
                    <p className='text-center text-[19px] py-6'>A whole suite of logistics software from Apaale centralizes and automates document management procedures. This is how it makes managing logistical paperwork easier:</p>
                </div>

                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-8">

                    <div className="md:max-w-full p-5 max-w-[500px] border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-2xl text-center font-semibold'>Integration</h3>
                        <p className='text-justify pt-4'>Data may be exchanged automatically across a variety of systems, such as supply chain management software and ERP, thanks to Apaale's platform's smooth integration.</p>
                    </div>

                    <div className=" max-w-[500px] md:max-w-full p-5 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-2xl text-center font-semibold'>Automation</h3>
                        <p className='text-justify pt-4'>Apaale minimizes mistakes and boosts productivity by automating workflows and document creation, which cuts down on the time and effort needed to handle logistical paperwork.</p>
                    </div>

                    <div className="max-w-[500px] md:max-w-full p-5 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-2xl text-center font-semibold'>Complaince</h3>
                        <p className='text-justify pt-4'>Apaale updates its software often to guarantee adherence to changing regulatory standards, lowering the possibility of fines and delays resulting from non-compliance.</p>
                    </div>
                    <div className=" max-w-[500px] md:max-w-full p-5 border border-indigo-200 shadow-lg shadow-indigo-300/70 rounded-xl">
                        <h3 className='text-2xl text-center font-semibold'>Visibility</h3>
                        <p className='text-justify pt-4'>Stakeholders may make proactive decisions and solve problems by using Apaale's platform to get real-time visibility into the status of shipments and related documentation.</p>
                    </div>
                </div>
               
            </div>


            <div className="px-5 sm:px-10 md:px-20 bg-[#F3F4F9] py-16">
                <h3 className='text-center font-bold text-3xl'>Use of Documentation</h3>
                <p className='text-[19px] text-justify mt-5 '>
                    Your friends at Apaale are here to assist our clients at every stage of the shipping process, just as they always have. Because we understand that you have a business to operate, you can rely on Apaale to assist you in finding the finest carriers, shipping costs, and customer support for your truckload and LTL shipping requirements. Talk to us now to find out how we can make your shipping more intelligent.
                </p>
            </div>

            <header className='text-center mx-auto mb-2 lg:px-20 mt-5'>
                <h2 className='tracking-normal font-bold text-3xl mt-4 font-sans uppercase text-black-500'>Customers</h2>
            </header>
            <div className='grid grid-cols-3'>
                <div className='mb-4 flex justify-end py-8'>
                    <div className='flex justify-center items-center mt-3'>
                        <img src="/images/clicky.jpeg" alt="alternate text" className='h-16' />
                    </div>
                </div>
                <div className='mb-4 flex justify-center py-2'>
                    <div className='flex justify-center items-center mt-3'>
                        <img src="/images/gmp.jpeg" alt="alternate text" className='h-16' />
                    </div>
                </div>
                <div className='mb-4 flex justify-start py-8'>
                    <div className='flex justify-center items-center mt-3'>
                        <img src="/images/metro.jpeg" alt="alternate text" className='h-16' />
                    </div>
                </div>
            </div>
            <div className='bg-[#F3F4F9]'>
                <header className='text-center mx-auto mb-2 lg:px-20 py-6'>
                    <h3 className='tracking-normal font-bold text-xl mt-4 font-sans text-black-500'>Still have questions about our Intracity Services?</h3>
                </header>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='mb-4 flex justify-end py-8'>

                    </div>
                    <div className='mb-4 flex justify-center py-2'>
                        <button type="submit" className='flex lg:w-1/2 md:w-full mx-auto justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-sans font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Call Us Now</button>
                    </div>
                    <div className='mb-4 flex justify-start py-8'></div>
                </div>
            </div>
        </div>
    )
}

export default ServicesDocuments