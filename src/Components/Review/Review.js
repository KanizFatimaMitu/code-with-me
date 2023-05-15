import React from 'react';
import review1 from '../../Assests/review1.png'
import review2 from '../../Assests/review2.png'
import review3 from '../../Assests/review3.png'
import review4 from '../../Assests/review4.png'

const Review = () => {
    return (
       <div>
        <h1 className='text-center text-3xl font-bold my-8'>Our Students</h1>
         <div className='flex justify-center items-center my-12 mx-4 gap-x-8 gap-y-8 flex-col lg:flex-row'>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                <img src={review1} alt='/'></img>
                </figure>
                <div class="card-body items-center text-center">
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>we Love their system of education</p>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                <img src={review2} alt='/'></img>
                </figure>
                <div class="card-body items-center text-center">
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"visited often and i love this website"</p>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                <img src={review3} alt='/'></img>
                </figure>
                <div class="card-body items-center text-center">
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"easy to connect"</p>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                <img src={review4} alt='/'></img>
                </figure>
                <div class="card-body items-center text-center">
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"we Love their system of education"</p>
                </div>
            </div>

        </div>
       </div>
    );
};

export default Review;