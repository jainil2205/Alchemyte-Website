import React from "react";
import Navbar from "../components/Navbar";
import backgroundPattern from "../components/assets/pattern-bg.png";

const AlchemyPage = () => {
    return (
        <>
            {/* Navbar and Header Container */}
            <div className="relative w-full">
                <Navbar />
                
                {/* Header */}
                <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-48 md:h-60 bg-gray-100 px-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">What does Alchemyte do?</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>
                
                {/* Background Pattern */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})`, zIndex: -1 }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="bg-white min-h-[20vh] p-4 pt-2 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg text-gray-600 pt-5 text-center md:text-left">
                        Welcome to Alchemy Page, where we unlock the potential of data through advanced analytics and AI-driven solutions.
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl font-semibold text-gray-700">Data Transformation</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Our expertise lies in turning raw data into actionable insights that drive business success.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-700 mt-6">AI Solutions</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Implementing cutting-edge AI and machine learning models to optimize decision-making.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-700 mt-6">Strategic Innovation</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Partnering with businesses to craft innovative solutions that ensure growth and sustainability.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlchemyPage;
