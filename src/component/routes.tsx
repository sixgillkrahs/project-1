import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import HomeView from '../pages/homeview';
import AboutView from '../pages/aboutview';
import Header from './header/header';
import Footer from './footer/footer';


const RouteRoot = () => {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
            </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default RouteRoot;