
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header_Menu/Header';
import SalesDevelopment from './Header_Menu/SalesDevelopment';
import GoToMarket from './Header_Menu/GoToMarket';
import DataSolutions from './Header_Menu/DataSolutions';
import Pricing from './Header_Menu/Pricing';
import Resources from './Header_Menu/Resources';
import Footer from './Footer/Footer';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModelContent from './Popup/ModelContent';



function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header openPopup={() => setShowPopup(true)} />

        {
          showPopup && createPortal(
            <ModelContent onClose={() => setShowPopup(false)} />,
          document.getElementById("popup-root")
          )
        }

        

        <Routes>
          <Route path='/' element={<SalesDevelopment openPopup={() => setShowPopup(true)} />} />
          <Route path='gotomarket' element={<GoToMarket />} />
          <Route path='datasolutions' element={<DataSolutions />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='resources' element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
