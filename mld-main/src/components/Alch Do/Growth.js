import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";

const GrowthStartups = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-60 bg-gray-100">
                    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">Growth Startups</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-lg text-gray-600 pt-5 text-center md:text-left">
                        We collaborate with visionary founders to build startups that will shape the future with AI:
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Fortifai</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Enhance startup security and resilience with tailored AI solutions (Link).
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Wellytics</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Revolutionizing health analytics with actionable insights (Link).
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Insight Agents</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Deliver real-time business insights, helping sales and leadership teams act decisively.
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Coming soon...</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Empowering industries with AI/AR-driven workforce solutions.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            AI/ML offerings for the Defence industry.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                        <button 
                            className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-bold w-full md:w-auto"
                            onClick={() => navigate("/service2")}>
                            &laquo; Innovative Products
                        </button>
                        <button 
                            className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-bold w-full md:w-auto"
                            onClick={() => navigate("/service3")}>
                            Growth Startups &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GrowthStartups;
