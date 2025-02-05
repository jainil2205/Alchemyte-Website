import React from "react";
import NavBar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";
import { useNavigate } from "react-router-dom";

const POV = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Navbar and Header Container with Background */}
            <div className="relative w-full">
                <NavBar />
                <div className="relative w-full h-60 flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-black text-center">POV</h1>
                </div>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${backgroundPattern})` }}></div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen px-6 py-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg text-gray-600 pt-5">
                        As the world around us evolves, we will continue to present our Point of View on evolving trends.
                    </p>

                    <div className="mt-8 text-left">
                        <p className="text-lg text-gray-600 mt-2">
                            If you are not enabling the transaction you are not creating value - Analytics PoV
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Buy vs Build in the Gen AI world - Product Thinking PoV
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            The AI-powered CEO - Leadership PoV
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Not so secret (anymore) Agents - Agent AI PoV
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default POV;
