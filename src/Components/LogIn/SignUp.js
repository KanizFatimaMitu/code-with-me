import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
  
    


    let signInError;
    const navigate = useNavigate();


    if (gError || error) {
        signInError = <p>Error: {gError.message}{error.error}</p>
    }


    if (gLoading || loading) {
        return <p>Loading...</p>;
    }
    if (gUser || user) {
        console.log(user)
        console.log(gUser)
        navigate('/classes')
    }
    const handleSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        navigate('/classes');
    }

    return (
        <div className='mt-24  w-3/2 lg:w-1/2 mx-auto'>

            <div class="card-body  bg-neutral ">
                <h1 className='text-center font-bold text-2xl'>Please Sign<span className='text-info'>up !</span></h1>
                <form onSubmit={(handleSubmit)} >
                <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="name"
                            class="input input-bordered"
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>
                    <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text"
                            placeholder="email"
                            class="input input-bordered"
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text"
                            placeholder="password"
                            class="input input-bordered"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <label class="label">
                            <small>already have an account ? <span ><NavLink to='/signin' className='text-accent'>Click here</NavLink></span></small>

                        </label>
                        
                    </div>
                    {signInError}

                    
                
               
                <div class="form-control mt-6">
                    <button
                        onClick={() =>  createUserWithEmailAndPassword(name, email, password)}
                        class="btn btn-primary">
                        signup
                    </button>
                </div>
                
                </form>
                <h1 className='text-info m-2 text-center font-bold text-lg'>OR</h1>
                <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-primary">
                    continue with google
                </button>
            </div>
        </div>
    );
};

export default SignUp;