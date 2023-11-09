import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import './Menubar.css';
import logo from '../../assets/logo/logo-bdu.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menubar = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=''>
            <div data-aos="fade-down" data-aos-duration="1000" className='glass-background text-white pt-4 px-20 pb-1'>
                <ul className='flex justify-center gap-14' >
                    {/* <li>
                        <div>
                            <img className='lg:w-[75px] lg:h-[40px]' src={logo} alt="" />
                        </div>
                    </li> */}
                    <li className='hoverDesign pb-2'>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? "navlink pb-2" : undefined
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li className='hoverDesign dropdown pb-2'>
                        <button>About Us <AiOutlineCaretDown className='inline mb-[1px]' size={11} /></button>
                        <ul className="dropdown-content">
                            <li>
                                <Link to='/history' className='linkCss' >
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link to='/goals' className='linkCss' >
                                    Goals & Objectives
                                </Link>
                            </li>
                            <li>
                                <Link to='/faculty' className='linkCss' >
                                    Faculty
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='hoverDesign dropdown pb-2'>
                        <button>Academic <AiOutlineCaretDown className='inline mb-[1px]' size={11} /></button>
                        <ul className="dropdown-content">
                            <li>
                                <Link to='/undergraduate' className='linkCss' >
                                    Undergraduate Studies
                                </Link>
                            </li>
                            <li>
                                <Link to='/graduate' className='linkCss' >
                                    Graduate Studies
                                </Link>
                            </li>
                            <li>
                                <Link to='/training_programs' className='linkCss' >
                                    Training Programs
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='hoverDesign pb-2'>
                        <NavLink to='/notice' className={({ isActive }) =>
                            isActive ? "navlink pb-2" : undefined
                        }>
                            Notice
                        </NavLink>
                    </li>

                    <li className='hoverDesign pb-2'>
                        <NavLink to='/research' className={({ isActive }) =>
                            isActive ? "navlink pb-2" : undefined
                        }>
                            Research
                        </NavLink>
                    </li>
                    <li className='hoverDesign dropdown pb-2'>
                        <button>Activities <AiOutlineCaretDown className='inline mb-[1px]' size={11} /></button>
                        <ul className="dropdown-content">
                            <li>
                                <Link to='/new_and_events' className='linkCss' >
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link to='/upcoming_events' className='linkCss' >
                                    Upcoming Events
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className='hoverDesign pb-2'>
                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "navlink pb-2" : undefined
                        }>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;