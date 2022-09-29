import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../../Assests/pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faSignIn } from '@fortawesome/free-solid-svg-icons'



const LogIn = () => {
    return (
        <div className='mt-16'>
            
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold pb-5 text-primary">Welcome to Javascript !</h1>
                        <p>JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web used by programmers across the world to create dynamic and interactive web content like applications and browsers.JavaScript is a simple and easy-to-learn programming language as compared to other languages such as C++, Ruby, and Python. </p>
                        <button class="btn btn-active mt-2 btn-primary">
                            <NavLink to='/signin'>Please LogIn  <FontAwesomeIcon  icon={ faSignIn} /></NavLink>
                        </button>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div>
                            <img src={pic} alt='/'></img>
                        </div>
                    </div>
                </div>
                <div className=' mt-96'>
                        <FontAwesomeIcon  icon={ faArrowAltCircleDown} />
                        </div>
            </div>
            
            
        </div>
    );
};

export default LogIn;