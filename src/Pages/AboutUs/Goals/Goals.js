import React from 'react';

const Goals = () => {
    return (
        <div className='lg:px-20  px-3 lg:pt-36 bg-white text-black'>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>Goals & Objectives-Department of Data Science</h1>
            </div>
            <div className='lg:flex gap-14 mt-3 text-justify lg:px-20 xl:px-20px 2xl:px-[15%]'>
                <div className=''>

                    <h1 className='mt-2 text-3xl font-semibold tracking-widest'>Our Goals</h1>
                    <ul className='mt-5 ml-5 text-sm 2xl:text-lg' style={{ listStyle: "square" }}>
                        <li>To make the young generation fit to lead the Fourth Industrial Revolution through the free use of information and communication technology.</li>
                        <li>
                            Strengthening academy and industrial relations.
                        </li>
                        <li>
                            To develop future world technologies including artificial intelligence robotics, big data block chain and virtual reality.
                        </li>
                        <li>
                            Arranging internships for students with industry in all high-tech parks of the country.
                        </li>
                    </ul>
                </div>
                <div className=''>

                    <h1 className='mt-2 text-3xl font-semibold tracking-widest'>Future Plans</h1>
                    <ul className='mt-5 ml-5 text-sm 2xl:text-lg' style={{ listStyle: "square" }}>
                        <li>Build the university as a world class smart university, whose campus will be completely controlled by digital technology.</li>
                        <li>
                            To establish a smart University with all the State-of-the-Art digital facilities.
                        </li>
                        <li>
                            Establishment of EDUCATION CLOUD as the first university in Bangladesh.
                        </li>
                        <li>
                            To build the future of the young students as the pioneers of Bangladesh by making them suitable for the Fourth Industrial Revolution through INCUBATION CENTER.
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Goals;