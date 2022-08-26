import React from 'react';

const SignUp = () => {
    return (
        <div className='mt-24  w-3/2 lg:w-1/2 mx-auto'>
           
             <div class="card-body  bg-neutral ">
             <h1 className='text-center font-bold text-2xl'>Sign<span className='text-info'>up</span></h1>
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered" />
                            </div>
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
                                <button class="btn btn-primary">signup</button>
                            </div>
                        </div>
        </div>
    );
};

export default SignUp;