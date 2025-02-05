import React from "react";
import Navbar from "../components/Navbar";
import backgroundPattern from "../components/assets/pattern-bg.png";

const Intro = () => {
    return (
        <>
            {/* Navbar and Header Container with Background */}
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-48 md:h-60 bg-gray-100 px-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">The Alchemy of Data</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-lg text-gray-600 pt-5 text-center md:text-left leading-relaxed">
                        Alchemyte Data was envisioned with the intent of making every byte create monetary value.
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Alchemy /ˈalkəmi/</h2>
                        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
                            The ancient science of alchemy intended to convert base metals into gold (value).
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Byte /bʌɪt/</h2>
                        <p className="text-lg text-gray-600 mt-2 leading-relaxed">
                            A byte of data by itself holds no value until the right context is applied to create value out of it.
                        </p>

                        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                            Over the last few decades, companies have spent billions globally on setting up their data ecosystem (compute, storage, apps, and models). Now, every Board expects the data ecosystem in their company to pay for itself and more.
                        </p>

                        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                            To explore more, please write to us at <a href="mailto:innovation@alchemytedata.com" className="text-blue-900 underline">innovation@alchemytedata.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
