import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../../Assests/pic.jpg'


const LogIn = () => {
    return (
        <div className='mt-12'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold pb-5 text-primary">Enroll now !</h1>
                        <p>JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web used by programmers across the world to create dynamic and interactive web content like applications and browsers.JavaScript is a simple and easy-to-learn programming language as compared to other languages such as C++, Ruby, and Python. </p>
                        <button class="btn btn-active mt-2 btn-primary">
                            <NavLink to='/signin'>Enroll</NavLink>
                        </button>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div>
                            <img src={pic} alt='/'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;