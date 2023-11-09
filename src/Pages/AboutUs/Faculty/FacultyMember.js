import React from 'react';
import { Link } from 'react-router-dom';
import './FacultyMember.css';
import vcSir from '../../../assets/faculty/vc-sir.jpg';
import akterSir from '../../../assets/faculty/akter-sir.jpg';
import asrafSir from '../../../assets/faculty/asraf-sir.jpg';
import zakiaMam from '../../../assets/faculty/zakia-mam.jpg';
import habibSir from '../../../assets/faculty/habib-sir.jpg';
import soaSir from '../../../assets/faculty/soa-sir.jpeg';



const FacultyMember = () => {
    return (
        <div className=''>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>Head of the Department</h1>
            </div>
            <div className='lg:flex lg:justify-center lg:gap-10 mt-3 '>
                <Link to="/head" className=' lg:flex justify-start text-center lg:mt-3'>
                    <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                        <img className='lg:w-64 lg:h-52' src={vcSir} alt="" />
                        <div className='px-2 pb-6 pt-6'>
                            <Link to="/head" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500 '>Dr. Mohammad Mahfuzul Islam</Link>
                            <h1 className='my-1'>Professor</h1>
                            <h1>mahfuz.islam@gmail.com</h1>
                        </div>
                    </div>
                </Link>
                <div className='lg:mt-5 mt-8 lg:w-[50%]'>
                    <h1 className='text-2xl'>MESSAGE FROM</h1>
                    <h1 className='mt-2 text-3xl font-semibold tracking-widest'>THE DEPARTMENT HEAD</h1>
                    <p className='mt-5 text-justify'>
                        Data Science is an incredibly exciting and rapidly evolving field that holds immense potential to revolutionize industries and shape the future. As a student in our department, you will embark on a journey that combines cutting-edge technology, analytical thinking, and creativity to extract valuable insights from vast amounts of data...
                    </p>
                    <div className='mt-5'>
                        <button className='button-48'>READ MORE</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='mt-10'>
                <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                    <h1>Professor</h1>
                </div>
                <div className='grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-5 xl:gap-0 2xl:gap-5  mt-3'>
                    <Link to="/head" className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-64 h-52' src={vcSir} alt="" />
                            <div className='px-2 pb-6 pt-6'>
                                <Link to="/head" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500 '>Dr. Mohammad Mahfuzul Islam</Link>
                                <h1 className='my-1'>Professor</h1>
                                <h1>mahfuz.islam@gmail.com</h1>
                            </div>
                        </div>
                    </Link>
                    {/* <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-56 h-52' src={akterSir} alt="" />
                            <div className='px-2 pb-6 pt-6'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Aktaruzzaman Liton</Link>
                                <h1 className='my-1'>Professor</h1>
                                <h1>aktar@gmail.com</h1>
                            </div>
                        </div>
                    </div> */}



                </div>
            </div>
            {/* Assitant Professor */}
            <div className='mt-10'>
                <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                    <h1>Assistant Professor</h1>
                </div>
                <div className='grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-y-5 lg:gap-5 xl:gap-5 2xl:gap-5 mt-3'>


                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/7/bad3ff688b1e77ef1751611242edf3f8.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Md Ashraf Uzzaman</Link>
                                <h1 className='my-1'>Assistant Professor</h1>
                                <h1>asraf@gmail.com</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* lecturer */}
            <div className='mt-10'>
                <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest '>
                    <h1>Lecturer</h1>
                </div>
                <div className='grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-y-5 lg:gap-5 xl:gap-5 2xl:gap-5 mt-3 2xl:mx-[10%]'>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/17/cf49d3647417162957e6df6a74bf1a8a.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Syeda Zakia Nayem</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>zakia@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/3/1651995971.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Munira Akter Lata</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>lata@gmail.com</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/16/cf49d3647417162957e6df6a74bf1a8a.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Farhana Islam</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>farhana@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer'>
                            <img className='w-[195px] h-[180px] ' src="https://bdu.ac.bd/uploads/uploads/hr/employees/104/1682914549.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Aditya Rajbongshi</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>aditya@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/103/1682914333.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Rubel Sheikh</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>rubel@edu.bdu.ac.bd</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/106/1682915297.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Md. Nazmuzzaman Shifat</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>shifat@edu.bdu.ac.bd</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center text-center '>
                        <div className='bg-white border shadow-md imgContainer hover:cursor-pointer '>
                            <img className='w-[195px] h-[180px]' src="https://bdu.ac.bd/uploads/uploads/hr/employees/107/1682916261.jpg" alt="" />
                            <div className='px-2 pb-3 pt-3'>
                                <Link to="#" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Sujon Chandra Sutradhar</Link>
                                <h1 className='my-1'>Lecturer</h1>
                                <h1>sujon@edu.bdu.ac.bd</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default FacultyMember;