import React, { useEffect, useState } from 'react';
import Logobar from './Logobar';
import Menubar from './Menubar';
import MenubarSmall from './MenubarSmall';
import './Header.css';


const Header = () => {

    return (
        <div>
            {/* fixed top-0 left-0 w-full z-10 */}
            <div className='lg:block hidden fixed top-0 left-0 w-full z-10 '>
                <div>
                    <Logobar></Logobar>
                    <div className=''>
                        <Menubar></Menubar>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block '>
                <MenubarSmall></MenubarSmall>
            </div>
        </div>
    );
};

export default Header;