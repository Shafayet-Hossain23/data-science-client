import React from 'react';
import { Link } from 'react-router-dom';
import vcSir from '../../../assets/faculty/vc-sir.jpg'

const Head = () => {
    return (
        <div className='lg:pt-36 lg:px-20 px-3 bg-white text-black '>
            <div className='bg-gradient-to-r from-[#42409E] to-white lg:p-5 p-3 border border-[#42409E] rounded-sm lg:text-xl font-semibold text-white tracking-widest'>
                <h1>Dr. Mohammad Mahfuzul Islam-Professor</h1>
            </div>
            <div className='mt-3 lg:flex lg:justify-start lg:gap-10'>
                <img className='lg:w-80 rounded-sm' src={vcSir} alt="" />
                <div className='lg:mt-0 mt-5 '>
                    <h1 className='font-semibold'>Contact: </h1>
                    <p className='tracking-tighter'>
                        Vice-Chancellor, Bangabandhu Digital University & <br /> Dept. of CSE, BUET, Dhaka-1000 (on Leave)
                    </p>
                    <h1 className='font-semibold mt-2'>Email: </h1>
                    <p className='tracking-tighter'>
                        mahfuz.islam@gmail.com
                    </p>
                    <h1 className='font-semibold mt-2'>Telephone: </h1>
                    <p className='tracking-tighter'>
                        Office: +880 2 9665650-80 Ext. 6118, 6431 <br />
                        Cell: +880 191 307 1907 <br />
                        Residence: +880 2 9665650-80 Ext. 7987
                    </p>
                    <h1 className='font-semibold mt-2'>Webpage: </h1>
                    <p className='tracking-tighter'>
                        mahfuz.islam.com
                    </p>
                </div>
            </div>
            <div className=' lg:mt-10 mt-5'>

                <div>
                    <h1 className='font-semibold'>Research Area: </h1>
                    <p className='tracking-tighter'>
                        ......
                    </p>
                    <h1 className='font-semibold mt-2'>Research Interest: </h1>
                    <p className='tracking-tighter'>
                        Network Security, Steganography, Computer Forensics, Wireless Sensor Networks, Social Networks, Biometric Security, Information Security
                    </p>
                    <h1 className='font-semibold mt-2'>Academic Background: </h1>
                    <p className='tracking-tighter'>
                        PhD (Monash, Australia), M. Sc. Engg (CSE, BUET), B. Sc. Engg (CSE, BUET)
                    </p>
                    <h1 className='font-semibold mt-2'>Selected Publications: </h1>
                    <p className='tracking-tighter'>
                        (a) Edited Book Chapters (All DEST B1 category publications â€“ published in recognized books): <br /> <br />

                        [1] M. M. Islam, Mobility Support Wireless Resource Management for Cellular Multimedia Communications, VDM Publishers, ISBN: 978-3-639-21965-4. <br /> <br />

                        [2] M. M. Islam and M. Murshed, "Mobility support resource management in mobile networks," Handbook of Research in Mobile Business: Technical, Methodological and Social Perspectives, pp. 332-364, Chapter XXIV, Idea Group Publishers (IGP), Hershey, PA, USA.
                    </p>
                    <h1 className='font-semibold my-5'>Journal Papers: </h1>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>1.</div>
                        <div>
                            Mohammad Mamun Elahi, Md. Mahbubur Rahman, Mohammad Mahfuzul Islam, <b> An efficient authentication scheme for secured service provisioning in edge-enabled vehicular cloud networks towards sustainable smart cities, </b> Sustainable Cities and Society, 76, 2022. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>2.</div>
                        <div>
                            Onika Akter, Mohammad Ali Moni, Mohammad Mahfuzul Islam, Julian M. W. Quinn and A. H. M. Kamal, <b> Lung cancer detection using enhanced segmentation accuracy, </b> Applied Intelligence, Springer Nature, 2020.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>3.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam and Zahedul Islam, <b> An embedding technique for smartcard-supported e-healthcare services,</b> Iran Journal of Computer Science, 3, 195-205, 2020. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>4.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam, <b> A New Histogram-Shifting-Imitated Embedding Scheme,</b> Journal of Computer Engineering, 1, 82-86, 2018.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>5.</div>
                        <div>
                            Chinmay Bepery, Mohammad Mahfuzul Islam, Md. Mahbubur Rahman, Asma Akter Maria, Amina Nasrin Sumyea,<b> Index Based Gap Position Least Count Forward Backward Multiple Pattern Matching Algorithm, </b>Journal of Computer Engineering, 1, 41-48, 2018.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>7.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam, <b> Enhancing embedding capacity and stego image quality by employing multi predictors,</b> Journal of Information Security and Applications, 32, 59-74, 2017<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>8.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam,<b> Boosting up the data hiding rate through multi cycle embedment process,</b> Journal of Visual Communication and Image Representation, 40, 574–588, 2016. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>9.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam,<b> Enhancing the performance of the data embedment process through encoding errors,</b> Journal of Electronics, 5, 79-95, 2016.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>10.</div>
                        <div>
                            Sultana Habiba, A. H. M. Kamal, Mohammad Mahfuzul Islam,<b> Enhancing the Robustness of Visual Degradation Based HAM Reversible Data Hiding,</b> Journal of Computer Science, 12, 88-97, 2016. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>11.</div>
                        <div>
                            Mohammad Mahfuzul Islam, Akramul Azim, Golam Sorwar, <b> A New Dynamic Service Span Based Energy Comparison LEACH for Achieving Expected WSNs Lifetime, </b>International Journal of Information and Communication Technology, 8, 165-183, 2016.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>12.</div>
                        <div>
                            Mohammad Mahfuzul Islam, Fariha Tasmin Jaigirdar, Mohammad Manzurul Islam,<b> Maximizing Network Interruption In Wireless Sensor Network: An Intruder’s Perspective,</b> International Journal of Computer Networks & Communications (IJCNC), 7, 103-121, 2015. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>13.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam,<b> Facilitating and securing offline e-medicine service through image steganography,</b> Healthcare Technology Letters, 1, 74-79, 2014.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>14.</div>
                        <div>
                            Md. Akkas Ali, Mohammad Mahfuzul Islam,<b> A Biometric Based: 3-D Ear Recognition System Combining Local and Holistic Features,</b> International Journal of Modern Education and Computer Science (IJMECS), 5, 36-41, 2013. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>15.</div>
                        <div>
                            F. T. Jaigirdar, Mohammad Mahfuzul Islam,<b> Assurance of the Maximum Destruction in Battlefield using Cost-Effective Approximation Techniques,</b> Journal of Networks, 7, 1967-1977, 2012.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <h1 className='font-semibold my-5'>Conference Papers: </h1>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>1.</div>
                        <div>
                            Mohammad Mamun Elahi, Md. Mahbubur Rahman, Mohammad Mahfuzul Islam, <b> An efficient authentication scheme for secured service provisioning in edge-enabled vehicular cloud networks towards sustainable smart cities, </b> Sustainable Cities and Society, 76, 2022. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>2.</div>
                        <div>
                            Onika Akter, Mohammad Ali Moni, Mohammad Mahfuzul Islam, Julian M. W. Quinn and A. H. M. Kamal, <b> Lung cancer detection using enhanced segmentation accuracy, </b> Applied Intelligence, Springer Nature, 2020.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>3.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam and Zahedul Islam, <b> An embedding technique for smartcard-supported e-healthcare services,</b> Iran Journal of Computer Science, 3, 195-205, 2020. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>4.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam, <b> A New Histogram-Shifting-Imitated Embedding Scheme,</b> Journal of Computer Engineering, 1, 82-86, 2018.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>5.</div>
                        <div>
                            Chinmay Bepery, Mohammad Mahfuzul Islam, Md. Mahbubur Rahman, Asma Akter Maria, Amina Nasrin Sumyea,<b> Index Based Gap Position Least Count Forward Backward Multiple Pattern Matching Algorithm, </b>Journal of Computer Engineering, 1, 41-48, 2018.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>7.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam, <b> Enhancing embedding capacity and stego image quality by employing multi predictors,</b> Journal of Information Security and Applications, 32, 59-74, 2017<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>8.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam,<b> Boosting up the data hiding rate through multi cycle embedment process,</b> Journal of Visual Communication and Image Representation, 40, 574–588, 2016. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>9.</div>
                        <div>
                            A. H. M. Kamal and Mohammad Mahfuzul Islam,<b> Enhancing the performance of the data embedment process through encoding errors,</b> Journal of Electronics, 5, 79-95, 2016.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>10.</div>
                        <div>
                            Sultana Habiba, A. H. M. Kamal, Mohammad Mahfuzul Islam,<b> Enhancing the Robustness of Visual Degradation Based HAM Reversible Data Hiding,</b> Journal of Computer Science, 12, 88-97, 2016. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>11.</div>
                        <div>
                            Mohammad Mahfuzul Islam, Akramul Azim, Golam Sorwar, <b> A New Dynamic Service Span Based Energy Comparison LEACH for Achieving Expected WSNs Lifetime, </b>International Journal of Information and Communication Technology, 8, 165-183, 2016.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>12.</div>
                        <div>
                            Mohammad Mahfuzul Islam, Fariha Tasmin Jaigirdar, Mohammad Manzurul Islam,<b> Maximizing Network Interruption In Wireless Sensor Network: An Intruder’s Perspective,</b> International Journal of Computer Networks & Communications (IJCNC), 7, 103-121, 2015. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>13.</div>
                        <div>
                            A. H. M. Kamal, Mohammad Mahfuzul Islam,<b> Facilitating and securing offline e-medicine service through image steganography,</b> Healthcare Technology Letters, 1, 74-79, 2014.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border p-2'>
                        <div className='font-bold'>14.</div>
                        <div>
                            Md. Akkas Ali, Mohammad Mahfuzul Islam,<b> A Biometric Based: 3-D Ear Recognition System Combining Local and Holistic Features,</b> International Journal of Modern Education and Computer Science (IJMECS), 5, 36-41, 2013. <Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 text-sm border border-t-0 p-2 bg-[#d2d2f0]'>
                        <div className='font-bold'>15.</div>
                        <div>
                            F. T. Jaigirdar, Mohammad Mahfuzul Islam,<b> Assurance of the Maximum Destruction in Battlefield using Cost-Effective Approximation Techniques,</b> Journal of Networks, 7, 1967-1977, 2012.<Link className='hover:text-blue-500' href="">[paper link]</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;