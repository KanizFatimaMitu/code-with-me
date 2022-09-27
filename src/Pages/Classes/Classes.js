import React from 'react';
import About from '../../Pages/About/About'
import Footer from '../../Shared/Footer/Footer';

const Classes = () => {
    return (
        <div className='mt-24'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    {/* <!-- The button to open modal --> */}
                    <label for="question-modal" class="btn modal-button font-bold text-info">Ask Question ?</label>

                    {/* <!-- Put this part before </body> tag --> */}
                    <input type="checkbox" id="question-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg mb-4 text-info">Add your Question here</h3>
                            <textarea class="textarea w-full textarea-primary" placeholder="type here...."></textarea>
                            <div class="modal-action">
                                <label for="question-modal" class="btn font-bold text-info">send</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="divider lg:divider-horizontal text-info">OR</div>
                <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    {/* <!-- The button to open modal --> */}
                    <label for="friend-modal" class="btn modal-button font-bold text-info">Add friend ?</label>

                    {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="friend-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg mb-4 text-info">Add your friend here !</h3>
                        <textarea class="textarea w-full textarea-primary" placeholder="type your friend's email here...."></textarea>
                        <div class="modal-action">
                            <label for="friend-modal" class="btn font-bold text-info">Add</label>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <About></About>
        <Footer></Footer>
        </div >
    );
};

export default Classes;