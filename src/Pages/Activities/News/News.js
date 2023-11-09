import React from 'react';
import img1 from '../../../assets/news/news-1.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineRight } from 'react-icons/ai';
import './News.css'

const News = () => {
    return (
        <div className='lg:px-20 px-3 lg:pt-36 bg-white text-black'>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>News & Events</h1>
            </div>
            <div className='pt-6 grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-10 '>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src={img1} alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>আইইবি’র কম্পিউটার ইঞ্জিনিয়ারিং ডিভিশনের চেয়ারম্যানের দায়িত্ব নিলেন বিডিইউ উপাচার্য</h1>
                        <h1 className='mt-3 text-sm'>ইঞ্জিনিয়ার্স ইনস্টিটিউশন বাংলাদেশের (আইইবি)কম্পিউটার ইঞ্জিনিয়ারিং ডিভিশনের চেয়ারম্যানের দায়িত্ব গ্রহণ করেছেন...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/05/940/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>বিডিইউতে গুচ্ছভুক্ত ‘বি’ ইউনিটের ২০২২-২৩ পূর্বঘোষিত সময় অনুযায়ী সফলভাবে সম্পন্ন হয়েছে</h1>
                        <h1 className='mt-3 text-sm'>বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি, বাংলাদেশ (বিডিইউ) কেন্দ্রে জিএসটি গুচ্ছভুক্ত বিশ্ববিদ্যালয়সমূহের ‘বি’...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/05/933/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>ওয়ালটন ডিজিটেকের সাথে বিডিইউ এর অত্যাধুনিক প্রযুক্তি বিনিময় বিষয়ক আলোচনা সভা</h1>
                        <h1 className='mt-3 text-sm'>ওয়ালটন ডিজিটেকের সাথে বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ (বিডিইউ)এর অত্যাধুনিক প্রযুক্তি বিনিময়...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/920/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ (বিডিইউ) পহেলা বৈশাখ উদযাপন</h1>
                        <h1 className='mt-3 text-sm'>চৈত্রসংক্রান্তির মাধ্যমে ১৪২৯ বঙ্গাব্দকে বিদায় জানিয়ে বাংলা বর্ষপঞ্জিতে যুক্ত হয়েছে নতুন বছর ১৪৩০ বঙ্গাব্দ।জীর্ণ,... </h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/917/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>বঙ্গবন্ধু ডিজিটাল ভার্সিটি এবং ওয়াদানি ফাউন্ডেশন এর মধ্যে সমঝোতা স্মারক (এমওইউ) স্বাক্ষর</h1>
                        <h1 className='mt-3 text-sm'>বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ ও ওয়াদানি ফাউন্ডেশন এর মধ্যে স্কিল ডেভেলপমেন্ট বিষয়ে বৃহস্পতিবার ...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/915/feature_image.jpeg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>বঙ্গবন্ধু ডিজিটাল ভার্সিটি এবং ডেটাসফট এর মধ্যে সমঝোতা স্মারক (এমওইউ) স্বাক্ষর</h1>
                        <h1 className='mt-3 text-sm'>বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ ও ডেটাসফট ম্যানুফ্যাকচারিং এন্ড এসেম্বলি ইংক.লিমিটেড এর মধ্যে...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/913/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>স্মার্ট বাংলাদেশ বিনির্মাণে বিডিইউ ছাত্রলীগকে ঐক্যবদ্ধভাবে কাজ করতে হবেঃ বিডিইউ উপাচার্য</h1>
                        <h1 className='mt-3 text-sm'>বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ এর মাননীয় উপাচার্য অধ্যাপক ড.মুহাম্মদ মাহফুজুল... </h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] rounded-sm  hover:cursor-pointer imgContainer'>
                    <img className='rounded-sm' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/03/903/feature_image.jpg" alt="" />
                    <div className='p-4'>
                        <h1 className='text- font-semibold '>জাতীয় স্মৃতিসৌধে স্বাধীনতা যুদ্ধের শহিদদের প্রতি বঙ্গবন্ধু ডিজিটাল ভার্সিটি পরিবারের শ্রদ্ধা</h1>
                        <h1 className='mt-3 text-sm'>হান স্বাধীনতা ও জাতীয় দিবসে স্বাধীনতা যুদ্ধের শহিদদের প্রতি শ্রদ্ধা জানিয়েছেন বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি...</h1>
                        <button className='text-sm text-[#42409E] font-semibold mt-3 hover:tracking-widest hover:duration-500 '>READ MORE <AiOutlineRight size={18} className='inline mb-1' /></button>
                    </div>
                    <div className='border-t px-4 py-2'>
                        <h1 className='text-sm'>25 May 2023</h1>
                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <ul className="pagination">
                    <li className="icon">
                        <a href="#"><span className=""><AiOutlineArrowLeft /></span>Previous</a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    {/* <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">10</a></li> */}
                    <li class="icon">
                        <a href="#">Next<span className=""><AiOutlineArrowRight /></span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;