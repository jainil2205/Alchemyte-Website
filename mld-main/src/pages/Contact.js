import React from 'react';
import NavBar from '../components/Navbar';
import backgroundPattern from '../components/assets/pattern-bg.png';
import { useDocTitle } from '../components/CustomHook';

const Contact = () => {
    useDocTitle('Alchemyte');

    // Styles for background pattern (Only for Contact Us section)
    const headerBackgroundStyle = {
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.4
    };

    return (
        <>
            {/* Navbar and Header Container with Background */}
            <div className="relative w-full">
                <NavBar />
                {/* Header */}
                <div className="relative w-full h-60 flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-black text-center">Contact Us</h1>
                </div>
                {/* Background for Contact Us Section */}
                <div style={headerBackgroundStyle}></div>
            </div>

            {/* Main Content */}
            <div className="bg-white py-6 lg:py-12 px-4 md:px-10">
                <div id="contact" className="flex flex-col lg:flex-row justify-center items-center w-full">
                    <div className="w-full lg:w-3/5 bg-white p-6 md:px-10 lg:pl-16 lg:pr-32 rounded-2xl shadow-2xl" data-aos="zoom-in">
                        <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-xl">Our Location</h1>
                        {/* Google Maps Embed */}
                        <div className="w-full h-80 mt-4">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939666829331!2d72.50174427537754!3d23.02674301552465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b29ceaaaaa1%3A0x4a3468c114486cd9!2sTitanium%20One!5e0!3m2!1sen!2sin!4v1706612161545!5m2!1sen!2sin"
                                className="w-full h-full rounded-lg"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-4">* Click on the map to get directions to our office</p>
                    </div>

                    {/* Contact Information Box */}
                    <div className="w-full lg:w-2/5 mt-6 lg:mt-0 px-6 py-4 bg-blue-900 rounded-2xl shadow-lg text-white">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Office Address</h2>
                            <p className="text-gray-300">808, Titanium One, S G Road Nr Pakwan Crossing, Ahmedabad, India 380015</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Call Us</h2>
                            <p className="text-gray-300">Tel: 9825738056</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Send an E-mail</h2>
                            <p className="text-gray-300">innovation@alchemytedata.com</p>
                        </div>
                        <div className="flex space-x-3 mt-4">
                            <a href="https://www.linkedin.com/company/alchemyte-data/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center items-center bg-white h-8 w-8 text-blue-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:animate-pulse">
                                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;