import React, { useEffect } from 'react';
// import './Card.css';
import attribute from '../../assets/card-image/attribute.png';
import dataset from '../../assets/card-image/dataset.png';
import technique from '../../assets/card-image/technique.png';
import algorithm from '../../assets/card-image/algorithms.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css';
import cardImage from '../../assets/card/card-bg.png'



const Card = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        // bg-gradient-to-r from-[#42409E] to-[#8585ab]
        <div className='mt-14'>

            <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-5 lg:gap-y-0 gap-y-5 main-bg'>
                <div className='border-[2px]  rounded-md  card-bg text-black  hover:shadow-md p-4 transition transform lg:hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer lg:mx-0 mx-[10%]' >
                    <div data-aos="zoom-in" data-aos-duration="500">
                        <div className='flex justify-center mt-7'>
                            <div>
                                <img className='lg:w-[100px] lg:h-[100] w-[150px] h-[150]  ' src={dataset} alt="" />

                            </div>
                        </div>
                        <h1 className='mt-10 text-xl font-medium'> <span className='font-bold text-red-500'>D</span>ataset</h1>
                        <p className='mt-2 '>
                            A dataset is a collection of organized and structured data that is used for analysis, research, or other purposes. Datasets can come in various forms and can include numerical data...
                        </p>
                    </div>
                </div>
                <div className='border-[2px]  bg-gradient-to-r from-[#42409E] to-[#8585ab] text-black  hover:shadow-md p-4  rounded-md transition transform lg:hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer lg:mx-0 mx-[10%]'>
                    <div data-aos="zoom-in" data-aos-duration="500">
                        <div className='flex justify-center mt-7'>
                            <div>
                                <img className='lg:w-[100px] lg:h-[100] w-[150px] h-[150]' src={attribute} alt="" />

                            </div>
                        </div>
                        <h1 className='mt-10 text-xl font-medium'> <span className='font-bold text-red-500'>A</span>ttributes</h1>
                        <p className='mt-2'>
                            In supervised machine learning, attributes are used as input variables or independent variables that help predict or classify a target variable or dependent variable. The values of the...
                        </p>
                    </div>
                </div>
                <div className='border-[2px] card-bg text-black hover:shadow-md p-4  rounded-md 
                transition transform lg:hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer lg:mx-0 mx-[10%]'>
                    <div data-aos="zoom-in" data-aos-duration="500">
                        <div className='flex justify-center mt-7'>
                            <div>
                                <img className='lg:w-[100px] lg:h-[100] w-[150px] h-[150]' src={technique} alt="" />

                            </div>
                        </div>
                        <h1 className='mt-10 text-xl font-medium'> <span className='font-bold text-red-500'>T</span>echniques</h1>
                        <p className='mt-2 '>
                            Techniques refer to the specific methods and procedures used to analyze, interpret, and extract insights from data. These techniques are employed to solve specific problems, explore patterns...
                        </p>
                    </div>
                </div>
                <div className='border-[2px]  bg-gradient-to-r from-[#42409E] to-[#8585ab] text-black hover:shadow-md p-4  rounded-md transition transform lg:hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer lg:mx-0 mx-[10%]'>
                    <div data-aos="zoom-in" data-aos-duration="500">
                        <div className='mt-7 flex justify-center'>
                            <div>
                                <img className='lg:w-[100px] lg:h-[100] w-[150px] h-[150]' src={algorithm} alt="" />

                            </div>
                        </div>
                        <h1 className='mt-10 text-xl font-medium'> <span className='font-bold text-red-500'>A</span>lgorithms</h1>
                        <p className='mt-2'>
                            An algorithm refers to a step-by-step  procedure or a set of rules and instructions designed to solve a specific problem or perform a specific task on data. Algorithms are at the core of data science...
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;