import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';

import AlchemyPage from './pages/AlchemyPage'


// for alchemytes do
import DataAIStrategy from './components/Alch Do/Data'
import InnovativeProducts from './components/Alch Do/InnovativeProducts';
import GrowthStartups from './components/Alch Do/Growth';

// for POV
import POV from './components/POV/POV';
import AnalyticsPOV from './components/POV/AnalyticsPOV';
import ProductThinkingPOV from './components/POV/ProductThinkingPOV';
import LeadershipPOV from './components/POV/LeadershipPOV';
import AgentAIPOV from './components/POV/AgentAIPOV';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import FoundersSection from './pages/Team';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Alchemyte Data Solutions LLP");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            
            <Route path="/" element={<Home />} />
            
         
            <Route path="/alchemyte" element={<AlchemyPage />} />  

            <Route path="/service1" element={<DataAIStrategy />} />
            <Route path="/service2" element={<InnovativeProducts />} />
            <Route path="/service3" element={<GrowthStartups />} />

            <Route path="/pov" element={<POV />} />

            <Route path="/pov1" element={<AnalyticsPOV />} />
            <Route path="/pov2" element={<ProductThinkingPOV />} />
            <Route path="/pov3" element={<LeadershipPOV />} />
            <Route path="/pov4" element={<AgentAIPOV />} />

            <Route path="/team" element={<FoundersSection/>}/>

            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
