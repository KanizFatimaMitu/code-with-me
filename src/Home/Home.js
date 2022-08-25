import React from 'react';
import FeedBack from '../Components/FeedBack/FeedBack';
import LogIn from '../Components/LogIn/LogIn';
import Provide from '../Components/Provide/Provide';
import Review from '../Components/Review/Review';
import Statistics from '../Components/Statistics/Statistics';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
           <LogIn></LogIn>
           <Provide></Provide>
           <Review></Review>
           <FeedBack></FeedBack>
           <Statistics></Statistics>
           <Footer></Footer>
        </div>
    );
};

export default Home;