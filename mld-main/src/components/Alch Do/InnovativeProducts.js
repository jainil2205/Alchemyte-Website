import React from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import backgroundPattern from "../assets/pattern-bg.png";

const InnovativeProducts = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-60 bg-gray-100">
                    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">Innovative Products</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-lg text-gray-600 pt-5 text-center md:text-left">
                        Our product portfolio includes solutions tailored for enterprises and startups:
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">TraceCrystal (Authentication & Tracking)</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            A highly advanced solution for authentication, tracking, and transparency across supply chains.
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Momentum Model (Market Insights)</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Analyze and predict market trends to stay ahead of competitors. Works accurately across commodities, equities, and indexes.
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Insight Agents</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Deliver real-time business insights, helping sales and leadership teams act decisively.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                        <button 
                            className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-bold w-full md:w-auto"
                            onClick={() => navigate("/service1")}>
                            &laquo; Data & AI Strategy
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

export default InnovativeProducts;
