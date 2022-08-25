import React from 'react';

const FeedBack = () => {
    return (
        <div className='mx-auto'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold my-2 ">give me your <span className='text-info'>Feed</span><span className='text-accent'>Back!</span></h1>
                        <div className='flex flex-col py-4 gap-y-4'>
                            <input type="text" placeholder="your email" class="input input-bordered input-accent" />
                            <input type="text" placeholder="Type your feedback here" class="input input-bordered input-accent" />
                        </div>
                        <button class="btn btn-info text-base font-bold">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;