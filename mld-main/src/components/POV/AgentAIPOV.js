import React from "react";
import Navbar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";
import { useNavigate } from "react-router-dom";

const AgentAIPOV = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const headerBackgroundStyle = {
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "190%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.4
    };

    const navAndHeaderContainer = {
        position: "relative",
        width: "100%"
    };

    const headerStyle = {
        position: "relative",
        width: "100%",
        height: "15rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const titleStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black"
    };

    const mainContentStyle = {
        backgroundColor: "white",
        minHeight: "20vh",
        padding: "1rem",
        paddingTop: "0.5rem"
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem"
    };

    const buttonStyle = {
        backgroundColor: "#1f3c73",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "1rem",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer"
    };

    return (
        <>
            <div style={navAndHeaderContainer}>
                <Navbar />
                <div style={headerStyle}>
                    <h1 style={titleStyle}>AgentAI POV</h1>
                </div>
                <div style={headerBackgroundStyle}></div>
            </div>

            {/* <div style={mainContentStyle}>
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-lg text-gray-600 pt-5">
                        Transform your organization with strategic data and AI services tailored for leadership excellence:
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-xl font-semibold text-gray-700">Data and AI Ecosystem Assessment</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Identify gaps and opportunities in your current data landscape to build a robust foundation for AI.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: A CEO gains clarity on underperforming data assets and allocates resources to the most impactful areas.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-700 mt-6">AI-Driven Decision Frameworks</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Enable faster, smarter decision-making with AI-powered tools that align with strategic goals.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: AI highlights top-performing markets and suggests optimized allocation of marketing budgets.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-700 mt-6">Predictive Business Insights</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Stay ahead with predictive analytics that identify trends and risks before they happen.
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            Example: A CEO receives forecasts on industry disruptions, allowing proactive adjustments to strategy.
                        </p>
                    </div>

                    <div style={buttonContainerStyle}>
                        <button style={buttonStyle} onClick={() => handleNavigation("/service2")}>
                            &laquo; Innovative Products
                        </button>
                        <button style={buttonStyle} onClick={() => handleNavigation("/service3")}>
                            Growth Startups &raquo;
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default AgentAIPOV;
