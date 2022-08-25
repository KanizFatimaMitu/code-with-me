import React from 'react';
import FeedBack from '../Components/FeedBack/FeedBack';
import LogIn from '../Components/LogIn/LogIn';
import Provide from '../Components/Provide/Provide';
import Review from '../Components/Review/Review';
import Statistics from '../Components/Statistics/Statistics';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
           <LogIn></LogIn>
           <Provide></Provide>
           <Review></Review>
           <FeedBack></FeedBack>
           <Statistics></Statistics>
        </div>
    );
};

export default Home;