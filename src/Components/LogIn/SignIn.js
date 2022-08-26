import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSignInWithGoogle , useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [ createUserWithEmailAndPassword,,user,loading,error,] =useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (gError || error) {
        return (
            <div>
                <p>Error: {gError.message}</p>
            </div>
        );
    }
    if (gLoading || loading) {
        return <p>Loading...</p>;
    }
    if (gUser || user) {
        console.log(user)
        console.log(gUser)
        navigate('/classes')
    }

    return (
        <div className='mt-24  w-3/2 lg:w-1/2 mx-auto'>

            <div class="card-body  bg-neutral ">
                <h1 className='text-center font-bold text-2xl'>Sign<span className='text-info'>up</span></h1>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" class="input input-bordered" required />
                </div>
                <div class="form-control ">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" required/>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" class="input input-bordered" required/>
                    <label class="label">
                       <p
                            class="label-text-alt text-accent font-bold"
                            
                            ><small onClick={() => signInWithGoogle()}>continue with google ?</small>
                        </p>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button
                     onClick={() => createUserWithEmailAndPassword(user.email,user.password)}
                     class="btn btn-primary">
                        signup
                     </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;