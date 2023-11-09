import React from 'react';
import { SlCalender } from 'react-icons/sl';
import './Notice.css'
import { IoMdDownload } from 'react-icons/io';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Notice = () => {
    return (
        <div className='lg:px-20 px-3 lg:pt-36 bg-white text-black'>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>All Notices</h1>
            </div>
            <div className='mt-7 border border-black lg:p-8 p-5 rounded-md'>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>26 May 2023</span>
                        <h1 className='text-sm mt-3'>TOWN HALL MEETING এর নোটিশ</h1>
                    </div>
                    <div className='lg:mt-0 mt-5 '>
                        <button className='button-download'>Download </button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>26 May 2023</span>
                        <h1 className='text-sm mt-3'>OFFICE ORDER- MD. HABIBUR RAHMAN</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>25 May 2023</span>
                        <h1 className='text-sm mt-3'>ফাইনাল পরীক্ষার রুটিন (জানুয়ারি-২০২৩)</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>24 May 2023</span>
                        <h1 className='text-sm mt-3'>মাননীয় প্রধানমন্ত্রীর স্বদেশ প্রত্যাবর্তন দিবস উপলক্ষ্যে আলোচনা সভার নোটিশ</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>23 May 2023</span>
                        <h1 className='text-sm mt-3'>IOT ল্যাব সরঞ্জামাদি সরবরাহ ও ইনস্টলেশন সংক্রান্ত কাজের পূন:দরপত্র বিজ্ঞপ্তি</h1>
                    </div>
                    <div className=' lg:mt-0 mt-5 '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>22 May 2023</span>
                        <h1 className='text-sm mt-3'>NOTICE FOR FINAL EXAMINATION OF 2021-2022 ACADEMIC YEAR</h1>
                    </div>
                    <div className=' lg:mt-0 mt-5 '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>20 May 2023</span>
                        <h1 className='text-sm mt-3'>ADVISOR FOR FIVE CLUBS OF BANGABANDHU SHEIKH MUJIBUR RAHMAN DIGITAL UNIVERSITY ,BANGLADESH</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>18 May 2023</span>
                        <h1 className='text-sm mt-3'>NOTICE FOR SOFT SKILL DEVELOPMENT COURSE REGISTRATION</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between border-b border-black py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>17 May 2023</span>
                        <h1 className='text-sm mt-3'>বিডিইউ এর ক্লাসরুম, টিচার্স রুম ও স্টুডেন্ট সার্ভিস সেন্টার ডেকোরেশন ও সংশ্লিষ্ট ফার্ণিচার,…</h1>
                    </div>
                    <div className=' lg:mt-0 mt-5 '>
                        <button className='button-download'>Download</button>
                    </div>
                </div>
                <div className='lg:flex justify-between  py-5'>
                    <div>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>16 May 2023</span>
                        <h1 className='text-sm mt-3'>ZEBRA ZC300 PRINTER SERVICING WITH RELATED SPARE PARTS AT BDU সংক্রান্ত কাজের দরপত্র…</h1>
                    </div>
                    <div className='lg:mt-0 mt-5  '>
                        <button className='button-download'>Download</button>
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

export default Notice;