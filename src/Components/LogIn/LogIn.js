import React from 'react';
import CountDown from '../CountDown/CountDown';
import pic from '../../Assests/pic.jpg'


const LogIn = () => {
    return (
        <div className='mt-12'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold pb-5 text-primary">Enroll now !</h1>
                        <p>JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web used by programmers across the world to create dynamic and interactive web content like applications and browsers.JavaScript is a simple and easy-to-learn programming language as compared to other languages such as C++, Ruby, and Python. </p>
                       <CountDown></CountDown>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div>
                            <img src={pic} alt='/'></img>
                        </div>
                        {/* <div class="card-body  bg-neutral ">
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt text-accent font-bold">continue with google ?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;