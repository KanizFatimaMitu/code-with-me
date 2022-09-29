import React from 'react';

const Provide = () => {
    return (

       <div>
        <h1 className='text-center text-3xl font-bold my-8'>What i provide ?</h1>
         <div className='my-12 flex justify-center items-center mx-40'>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-2 gap-x-2' >
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">Html</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">CSS</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">Javascript</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">React</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">Node</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">Express</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">REST API</h2>
               </div>
           </div>
           <div class="card w-64 bg-primary shadow-xl">
               <div class="card-body justify-center items-center">
               <h2 class="card-title text-white font-bold text-2xl">MongoDB</h2>
               </div>
           </div>
           </div>
       </div>
       </div>
    );
};

export default Provide;