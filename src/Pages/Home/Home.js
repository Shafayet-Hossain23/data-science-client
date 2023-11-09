import React from 'react';
import Banner from './Banner';
import Message from './Message';
import Card from './Card';
import NewsEvent from './NewsEvent';
import Upcoming from '../Activities/Upcoming/Upcoming';

const Home = () => {
    return (
        <div className='pb-24 bg-white'>
            <Banner></Banner>
            <div className='lg:px-20 px-3 '>
                <Message></Message>
                {/* <Card></Card> */}
                <NewsEvent></NewsEvent>

            </div>

        </div>
    );
};

export default Home;