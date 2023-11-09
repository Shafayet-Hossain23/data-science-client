import React from 'react';
import FacultyBanner from './FacultyBanner';
import FacultyMember from './FacultyMember';

const Faculty = () => {
    return (
        // className='lg:mt-14'
        <div className='lg:pt-36 bg-white text-black'>
            {/* <FacultyBanner></FacultyBanner> */}
            <div className='lg:px-20 px-3'>
                <FacultyMember></FacultyMember>
            </div>

        </div>
    );
};

export default Faculty;