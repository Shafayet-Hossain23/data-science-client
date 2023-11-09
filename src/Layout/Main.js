import React from 'react';
import Header from '../SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop';
import Footer from '../SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;