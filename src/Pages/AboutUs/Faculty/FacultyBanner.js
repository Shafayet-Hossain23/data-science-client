import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FacultyBanner = () => {
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
        <div>
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
                    <img className='w-full lg:h-[700px] h-60' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/05/943/feature_image.jpg" alt="" />
                    {/* <div className="content lg:block hidden">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl' >"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
                            <div className='mt-3 flex justify-end '>
                                <button className='text-white bg-[#42409E] px-4 py-2 rounded-sm font-semibold mt-1 hover:bg-transparent border-2  border-[#42409E] hover:border-white hover:duration-500'>SEE MORE</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='zoom-container'>
                    <img className='w-full lg:h-[700px] h-60' src="https://bdu.ac.bd/bdu-admin/uploads/content/2023/04/920/feature_image.jpg" alt="" />

                    {/* <div className="content lg:block hidden">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl' >"Technology will never replace great teachers, but technology in the hands of great teachers can be transformational." - George Couros</p>
                            <div className='mt-3 flex justify-end'>
                                <button className='text-white bg-[#42409E] px-4 py-2 rounded-sm font-semibold mt-1 hover:bg-transparent border-2  border-[#42409E] hover:border-white hover:duration-500'>SEE MORE</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='zoom-container'>
                    <img className='w-full lg:h-[700px] h-60' src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/340953725_178352105028807_2210538478178188096_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeEGiVFeUcKWmC3eiyxJM2z_8KoWFIVPkg_wqhYUhU-SD6Y3FxTWNLrxwaFxVsnatF-kcd5DSvUkIqEy1aNgmkdt&_nc_ohc=q332w5W3-tUAX8E_vS0&_nc_ht=scontent.fdac8-1.fna&oh=00_AfBudITW_M1noLTvo407M2PTipn_5m0j6mWZ4Ri7P8enAA&oe=64755073" alt="" />

                    {/* <div className="content lg:block hidden">
                        <div data-aos="fade-right" data-aos-duration="3000" >
                            <p className='lg:font-medium text-2xl' >"The computer was born to solve problems that did not exist before." - Bill Gates</p>
                            <div className='mt-3 flex justify-end'>
                                <button className='text-white bg-[#42409E] px-4 py-2 rounded-sm font-semibold mt-1 hover:bg-transparent border-2  border-[#42409E] hover:border-white hover:duration-500'>SEE MORE</button>
                            </div>
                        </div>
                    </div> */}
                </div>
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

export default FacultyBanner;