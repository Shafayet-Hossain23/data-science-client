import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineRight } from 'react-icons/ai';
import img1 from '../../assets/banner/image-1.png';
import img2 from '../../assets/banner/image.png';
import img3 from '../../assets/banner/image-2.png';


const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='lg:mt-14'>
            <Carousel responsive={responsive}
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile",]}

                className='lg:-z-0 '

            >
                <div className='zoom-container'>
                    <img className='w-full lg:h-[650px] xl:h-[650px] 2xl:h-[800px] h-60' src={img1} alt="" />
                    <div className="content lg:block hidden ">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl tracking-widest text-background' >
                                ওয়ালটন ডিজিটেকের সাথে বিডিইউ এর অত্যাধুনিক প্রযুক্তি বিনিময় বিষয়ক আলোচনা সভা </p>
                            <div className='mt-3 flex justify-end '>
                                <button className='button-banner'>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='zoom-container'>
                    <img className='w-full lg:h-[650px] xl:h-[650px] 2xl:h-[800px] h-60' src={img2} alt="" />

                    <div className="content lg:block hidden">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl tracking-widest text-background' >বিডিইউতে গুচ্ছভুক্ত ‘বি’ ইউনিটের ভর্তি পরীক্ষা সফলভাবে সম্পন্ন</p>
                            <div className='mt-3 flex justify-end'>
                                <button className='button-banner'>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='zoom-container'>
                    <img className='w-full lg:h-[650px] xl:h-[650px] 2xl:h-[800px] h-60' src={img3} alt="" />

                    <div className="content lg:block hidden">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl tracking-widest text-background' >বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল ইউনিভার্সিটি,বাংলাদেশ (বিডিইউ) পহেলা বৈশাখ উদযাপন</p>
                            <div className='mt-3 flex justify-end'>
                                <button className='button-banner'>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className='text-white bg-[#42409E] px-4 py-2 rounded-sm font-semibold mt-1 hover:bg-transparent border-2  border-[#42409E] hover:border-white hover:duration-500'>SEE MORE</button> */}
                {/* <div>
                    <img src="https://bdu.ac.bd/bdu-admin/uploads/content/2022/11/773/feature_image1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://bdu.ac.bd/bdu-admin/uploads/content/2022/08/706/feature_image1.jpg" alt="" />
                </div> */}

            </Carousel>
        </div>
    );
};

export default Banner;