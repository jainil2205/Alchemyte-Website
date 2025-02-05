import React from "react";
import Navbar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";
import { useNavigate } from "react-router-dom";

const DataAIStrategy = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-60 bg-gray-100">
                    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">Data & AI Strategy</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-lg text-gray-600 pt-5 text-center md:text-left">
                        Transform your organization with strategic data and AI services tailored for leadership excellence:
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Data and AI Ecosystem Assessment</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Identify gaps and opportunities in your current data landscape to build a robust foundation for AI.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: A CEO gains clarity on underperforming data assets and allocates resources to the most impactful areas.
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">AI-Driven Decision Frameworks</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Enable faster, smarter decision-making with AI-powered tools that align with strategic goals.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: AI highlights top-performing markets and suggests optimized allocation of marketing budgets.
                        </p>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">Predictive Business Insights</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Stay ahead with predictive analytics that identify trends and risks before they happen.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: A CEO receives forecasts on industry disruptions, allowing proactive adjustments to strategy.
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

export default DataAIStrategy;
