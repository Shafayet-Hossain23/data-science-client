import React, { useContext, useState } from 'react';
import logo from '../../assets/logo/logo-bdu.png';
import './Logobar.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/UserContext';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Logobar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const logOutHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        // navigate('/')
                        Swal.fire({
                            title: "Logout!",
                            text: "Your have been logout",
                            icon: "success"
                        });
                        // setOpenLogoutModal(false)

                    })
                    .catch(error => {
                        // console.log(error.message)

                    })

            }
        });





    }
    return (
        // shafayet Hossain
        // text-white bg-gradient-to-r from-violet-500 via-[#42409E] to-violet-500
        // bg-gradient-to-r from-violet-500 via-[#42409E] to-violet-500 
        // bg-gradient-to-r from-white to-[#42409E] 
        <div className='lg:px-20 lg:py-2 bg-white    lg:p-5 p-3   text-white '>
            <div className='lg:flex justify-between'>
                <div></div>
                <div className='lg:flex lg:gap-10'>
                    <div>
                        <img className='lg:w-[75px] lg:h-[40px]' src={logo} alt="" />
                    </div>
                    {/* <div className='verticleLine'>

                    </div> */}
                    <div>
                        <h1 className='text-2xl font-semibold text-[#202633] tracking-widest '>Department of Data Science</h1>
                    </div>
                </div>
                {
                    user ?
                        <div className='flex justify-center items-center gap-2 pt-1'>
                            <div className="">
                                <div className=" rounded-full ring ring-[#42409E] ring-offset-base-100 ring-offset-2">

                                    <FaUserCircle className='text-black' size={25} />
                                </div>
                            </div>
                            <div className='dropdown'>
                                <button className='dropbtn' onClick={toggleDropdown}> <MdOutlineArrowDropDownCircle className='text-black' size={20} /></button>
                                <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} onClick={closeDropdown}>
                                    <Link to='/contact' className='hoverMenu'>Help</Link>
                                    <Link onClick={logOutHandler} className='hoverMenu'>Log Out </Link>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='lg:flex gap-2 text-sm text-black'>
                            <Link to="/login" className='hover:cursor-pointer'>
                                LOGIN
                            </Link>
                            <div className=''>
                                |
                            </div>
                            <Link to='/contact' className='hover:cursor-pointer'>
                                HELP
                            </Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Logobar;