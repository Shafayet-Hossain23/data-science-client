import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className='lg:px-20 px-3 lg:pt-36 bg-white text-black'>
            <div className=' bg-gradient-to-r from-[#42409E] to-white  lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>History-Department of Data Science</h1>
            </div>
            <div className='lg:flex justify-center gap-10 mt-6'>
                <div className='lg:flex justify-start text-center '>
                    <div className='bg-white  shadow-lg hover:shadow-xl zoom-container rounded-md'>
                        <img className='lg:w-96 lg:h-80 ' src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Computer_Science_Engineering_Building_%28National_Institute_of_Technology_Agartala%29.jpg" alt="" />

                    </div>
                </div>
                <div className='mt-5 lg:w-[50%]'>
                    <h1 className='text-2xl'>History</h1>
                    <h1 className='mt-2 text-3xl font-semibold tracking-widest'>Department of Data Science</h1>
                    <p className='mt-5 text-justify'>
                        Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh-Bangladesh's first specialized Government digital university. On 26 July 2016, the Government of the People's Republic of Bangladesh enacted a law in the National Assembly to establish this university on a 50-acre site adjacent to Bangabandhu Hi-Tech Park in Kaliakair, Gazipur District.
                    </p>
                    <div className='mt-5 '>
                        <button className='button-48'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;