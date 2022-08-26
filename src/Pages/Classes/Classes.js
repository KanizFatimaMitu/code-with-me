import React from 'react';

const Classes = () => {
    return (
        <div className='mt-24'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    {/* <!-- The button to open modal --> */}
                    <label for="my-modal-6" class="btn modal-button">Add student ?</label>

                    {/* <!-- Put this part before </body> tag --> */}
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Add</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal">OR</div>
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    {/* <!-- The button to open modal --> */}
                    <label for="my-modal-6" class="btn modal-button">Add video ?</label>

                    {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn">Add</label>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </div >
    );
};

export default Classes;