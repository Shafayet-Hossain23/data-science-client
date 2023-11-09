import React, { useEffect } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdDownload } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const NewsEvent = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mt-14 text-black'>
            <div className='lg:flex  gap-5 '>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className='lg:w-[65%]'>
                    {/* <h1 className='lg:text-2xl font-medium text-black'>
                        News & Events
                    </h1> */}
                    <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3  border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                        <h1>News & Events</h1>
                    </div>
                    <div className='mt-7'>
                        <div className='lg:flex gap-6 border rounded-md'>
                            <div>
                                <img className=' lg:w-[1000px] lg:h-full' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/05/940/feature_image.jpg" alt="" />
                            </div>
                            <div className='pr-5 py-3 lg:pl-0 pl-4 text-justify'>
                                <BsCalendarCheck className='inline' /> <span className='font-medium pl-2 '>27-04-2022</span>
                                <h1 className='mt-2 text-black font-semibold'>
                                    বিডিইউতে গুচ্ছভুক্ত ‘বি’ ইউনিটের ভর্তি পরীক্ষা সফলভাবে সম্পন্ন
                                </h1>
                                <h1 className='mt-2 text-sm'>
                                    বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি, বাংলাদেশ (বিডিইউ) কেন্দ্রে জিএসটি গুচ্ছভুক্ত বিশ্ববিদ্যালয়সমূহের ‘বি’ ইউনিটের সমন্বিত ভর্তি পরীক্ষা ২০২২-২৩ পূর্বঘোষিত সময় অনুযায়ী সফলভাবে সম্পন্ন হয়েছে...
                                </h1>
                                <button className='text-[#42409E] font-semibold mt-1 hover:tracking-widest hover:duration-500'>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                            </div>
                        </div>
                        <div className='lg:flex gap-6 border rounded-md mt-5'>
                            <div>
                                <img className='lg:w-[800px] lg:h-full ' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/05/933/feature_image.jpg" alt="" />
                            </div>
                            <div className='pr-5 py-3 lg:pl-0 pl-4 text-justify'>
                                <BsCalendarCheck className='inline' /> <span className='font-medium pl-2 '>27-04-2022</span>
                                <h1 className='mt-2 text-black font-semibold'>
                                    ওয়ালটন ডিজিটেকের সাথে বিডিইউ এর অত্যাধুনিক প্রযুক্তি বিনিময় বিষয়ক আলোচনা সভা
                                </h1>
                                <h1 className='mt-2 text-sm'>
                                    ওয়ালটন ডিজিটেকের সাথে বিডিইউ এর অত্যাধুনিক প্রযুক্তি বিনিময় বিষয়ক এক আলোচনা সভা ০৯ মে ২০২৩ (মঙ্গলবার) সকালে গাজীপুরের কালিয়াকৈরে বিশ্ববিদ্যালয়ের ...
                                </h1>
                                <button className='text-[#42409E] font-semibold mt-1 hover:tracking-widest hover:duration-500'>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                            </div>
                        </div>
                        <div className='lg:flex gap-6 border rounded-md mt-5'>
                            <div>
                                <img className='lg:w-[870px] lg:h-full ' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/917/feature_image.jpg" alt="" />
                            </div>
                            <div className='pr-5 py-3 lg:pl-0 pl-4 text-justify'>
                                <BsCalendarCheck className='inline' /> <span className='font-medium pl-2 '>27-04-2022</span>
                                <h1 className='mt-2 text-black font-semibold'>
                                    বঙ্গবন্ধু ডিজিটাল ভার্সিটি এবং ওয়াদানি ফাউন্ডেশন এর মধ্যে সমঝোতা স্মারক (এমওইউ) স্বাক্ষর
                                </h1>
                                <h1 className='mt-2 text-sm'>
                                    বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ ও ওয়াদানি ফাউন্ডেশন এর মধ্যে স্কিল ডেভেলপমেন্ট বিষয়ে বৃহস্পতিবার (১৩ এপ্রিল)গাজীপুরের কালিয়াকৈরে বিশ্ববিদ্যালয়ের...
                                </h1>
                                <button className='text-[#42409E] font-semibold mt-1 hover:tracking-widest hover:duration-500'>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                            </div>
                        </div>
                        <div className='lg:flex gap-6 border rounded-md mt-5'>
                            <div>
                                <img className='lg:w-[1000px] lg:h-full ' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/915/feature_image.jpeg" alt="" />
                            </div>
                            <div className='pr-5 py-3 lg:pl-0 pl-4 text-justify'>
                                <BsCalendarCheck className='inline' /> <span className='font-medium pl-2 '>27-04-2022</span>
                                <h1 className='mt-2 text-black font-semibold'>
                                    বঙ্গবন্ধু ডিজিটাল ভার্সিটি এবং ডেটাসফট এর মধ্যে সমঝোতা স্মারক (এমওইউ) স্বাক্ষর
                                </h1>
                                <h1 className='mt-2 text-sm'>
                                    বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ ও ডেটাসফট ম্যানুফ্যাকচারিং এন্ড এসেম্বলি ইংক.লিমিটেড এর মধ্যে ডেভেলপমেন্ট, কোলাবোরেশন, স্টুডেন্ট ফেলোশিপ, এসিস্টেন্টশিপ,ইন্টার্নশিপ...
                                </h1>
                                <button className='text-[#42409E] font-semibold mt-1 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                            </div>
                        </div>
                        <div className='flex lg:justify-end justify-center lg:mt-5 mt-5'>
                            <Link to="/new_and_events" className='button-48'>READ MORE</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className='lg:w-[35%] '>
                    {/* <h1 className='lg:text-2xl font-medium text-black '>
                        Notice
                    </h1> */}
                    <div className='bg-gradient-to-r from-[#42409E] to-white  lg:p-5 p-3 border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest lg:mt-0 mt-10'>
                        <h1>Notice</h1>
                    </div>
                    <div className='mt-7'>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>OFFICE ORDER- MD. HABIBUR RAHMAN</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>ফাইনাল পরীক্ষার রুটিন (জানুয়ারি-২০২৩)</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>মাননীয় প্রধানমন্ত্রীর স্বদেশ প্রত্যাবর্তন দিবস উপলক্ষ্যে...</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>১ বছর মেয়াদী PGD in IT Course এ ভর্তি বিজ্ঞপ্তি</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>বিডিইউ এর ক্লাসরুম, টিচার্স রুম ও স্টুডেন্ট সার্ভিস...</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>Notice for students about class attendence</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>বিডিইউ এর ১০০ একর জমির ডিজিটাল সার্ভে...</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white text-black border px-3 py-2 rounded-sm mt-2 hover:cursor-pointer hover:border-[#42409E]'>
                            <div>
                                <BsCalendarCheck className='inline mb-1 ' /> <span className='font-medium pl-1'>27-04-2022</span>
                                <h1 className='text-sm mt-1'>বিডিইউ এর মেইন ডোমেইন এর জন্য SSL সার্টিফি...</h1>
                            </div>

                            <div className='mt-1'>
                                <IoMdDownload size={20} />
                            </div>
                        </div>
                        <div className='flex lg:justify-end justify-center lg:mt-5 mt-5'>
                            <Link to='/notice' className='button-48'>READ MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEvent;