import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import logo from '../../assets/logo/logo-bdu.png'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import './MenubarSmall.css'


const MenubarSmall = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='glass-background-sm  px-3 pt-2 pb-2'>
                <div className='flex justify-between'>
                    <div onClick={() => setOpen(!open)} className='p-3 bg-[#42409E] cursor-pointer rounded-sm'>
                        <FaBars className=' text-white' />
                    </div>
                    <div >
                        <img className='h-[40px] w-[90px]' src={logo} alt="" />

                    </div>
                    <div>

                    </div>
                </div>

            </div>

            <div className={`z-50  shadow-2xl absolute left-0 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 w-3/4 h-full bg-[#42409E] text-white' : 'translate-x-[-100%]'}`}>
                <div className='flex justify-between pt-3 px-4 '>
                    <div>

                    </div>
                    {/* <div>
                        <img className='h-[40px] w-[90px] text-white' src={logo} alt="" />
                    </div> */}
                    <div onClick={() => setOpen(false)}>
                        <RxCross1 className='cursor-pointer text-white' size={28} />
                    </div>
                </div>
                <ul className='pt-10 px-7'>
                    <li className=' pb-2 py-3'>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? "" : undefined
                        }>
                            Home
                        </NavLink>
                    </li>
                    <hr />
                    <li className=' dropdown pb-2 py-3'>
                        <button>About Us <AiOutlineDown className='inline' /></button>
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
                    <hr />

                    <li className=' dropdown pb-2 py-3'>
                        <button>Academic <AiOutlineDown className='inline' /></button>
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
                    <hr />
                    <li className=' pb-2 py-3'>
                        <NavLink to='/notice' className={({ isActive }) =>
                            isActive ? "" : undefined
                        }>
                            Notice
                        </NavLink>
                    </li>
                    <hr />
                    <li className=' pb-2 py-3'>
                        <NavLink to='/research' className={({ isActive }) =>
                            isActive ? "" : undefined
                        }>
                            Research
                        </NavLink>
                    </li>
                    <hr />
                    <li className=' dropdown pb-2 py-3'>
                        <button>Activities <AiOutlineDown className='inline' /></button>
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
                    <hr />
                    <li className=' pb-2 py-3'>
                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "" : undefined
                        }>
                            Contact
                        </NavLink>
                    </li>
                    {/* <hr /> */}
                </ul>
            </div>
        </div>
    );
};

export default MenubarSmall;