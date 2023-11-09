import React from 'react';
import { SlCalender } from 'react-icons/sl';

const Upcoming = () => {
    return (
        <div className='lg:px-20 px-3 lg:pt-36 bg-white text-black'>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>Upcoming Events</h1>
            </div>
            <div className='lg:flex justify-center gap-10 pt-6'>
                <div className='lg:flex justify-start text-center '>
                    <div className='bg-white  shadow-lg hover:shadow-xl zoom-container rounded-md'>
                        <img className='lg:w-96 lg:h-80 ' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/02/859/feature_image.jpg" alt="" />

                    </div>
                </div>
                <div className='pt-5 lg:w-[50%]'>
                    <h1 className='font-semibold text-lg'>বিডিইউ শিক্ষার্থীদের উদ্ভাবিত “EDUASSIST-THE FUTURE OF INCLUSIVE EDUCATION” স্টল পরিদর্শন করছেন ডাক ও টেলিযোগাযোগ মন্ত্রণালয়ের মাননীয় মন্ত্রী মোস্তাফা জব্বার</h1>
                    <div className='pt-2'>
                        <SlCalender size={25} className='inline pb-1' />
                        <span className='font-semibold ml-2 pt-10'>26 May 2023</span>
                    </div>

                    <p className='pt-5 text-justify text-sm'>
                        ডিজিটাল বাংলাদেশ মেলা-২০২৩ এ বাক, শ্রবণ ও দৃষ্টি প্রতিবন্ধী শিক্ষার্থীদের জন্য বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ এর শিক্ষার্থীদের উদ্ভাবিত “EduAssist-The Future of Inclusive Education” স্টল পরিদর্শন করছেন ডাক ও টেলিযোগাযোগ মন্ত্রণালয়ের মাননীয় মন্ত্রী মোস্তাফা জব্বার।
                    </p>
                    <div className='pt-5 '>
                        <button className='button-48'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;