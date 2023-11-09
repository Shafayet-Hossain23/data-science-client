import React, { useEffect } from 'react';
import './Message.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import vcSir from '../../assets/faculty/vc-sir.jpg';
import vcSir1 from '../../assets/faculty/vc-Sir1.png'

const Message = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        // lg:w-64 lg:h-56
        <div data-aos="zoom-in-up" data-aos-duration="1000" className='lg:pt-10 pt-5 text-black'>
            <div className='bg-gradient-to-r from-[#42409E] to-white  lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>Welcome to the Department of Data Science (DDS)</h1>
            </div>
            <div className='lg:flex justify-center gap-10 mt-6'>
                <div className='lg:flex justify-start text-center '>
                    <div className='bg-white border shadow-sm hover:shadow-xl'>
                        <img className='lg:w-80 lg:h-60' src={vcSir} alt="" />
                        <div className='px-2 pb-6 pt-6'>
                            <Link to="/head" className='text-[14px] font-semibold mt-3 hover:text-[#42409E] hover:tracking-wide hover:duration-500'>Dr. Mohammad Mahfuzul Islam</Link>
                            <h1 className='my-1'>Chairman</h1>
                            <h1>Department of Data Science</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-5 lg:w-[50%]'>
                    <h1 className='text-2xl'>MESSAGE FROM</h1>
                    <h1 className='mt-2 text-3xl font-semibold tracking-widest'>THE CHAIRMAN</h1>
                    <p className='mt-5 text-justify'>
                        Data Science is an incredibly exciting and rapidly evolving field that holds immense potential to revolutionize industries and shape the future. As a student in our department, you will embark on a journey that combines cutting-edge technology, analytical thinking, and creativity to extract valuable insights from vast amounts of data...
                    </p>
                    <div className='mt-5 '>
                        <button className='button-48'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;