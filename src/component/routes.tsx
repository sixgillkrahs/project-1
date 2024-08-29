import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import HomeView from '../pages/homeview';
import AboutView from '../pages/aboutview';
import Header from './header/header';
import Footer from './footer/footer';
import Serviceview from '../pages/serviceview';
import Priceview from '../pages/priceview';
import Contactview from '../pages/contactview';


const RouteRoot = () => {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path='/service' element={<Serviceview/>} />
                <Route path='/price' element={<Priceview/>} />
                <Route path='/contact' element={<Contactview/>} />
            </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default RouteRoot;