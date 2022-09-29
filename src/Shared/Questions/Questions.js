import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Questions = () => {
    return (
        <div className='mx-40 my-16'>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title  bg-base-300 text-gray-300 font-bold text-center text-xl peer-checked:bg-neutral peer-checked:text-info">
                    "Click me to show all recent questions"
                    <p className='text-info m-2'>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon>
                    </p>
                </div>
                <div class="collapse-content bg-primary font-bold text-primary peer-checked:bg-neutral peer-checked:text-info">
                    <div class="collapse-title my-2 text-xl bg-primary text-white text- font-medium">
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> what is database ?
                    </div>
                    <div class="collapse-title my-2 text-xl bg-primary text-white text- font-medium">
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> what is the Difference between "===" & "==" ?
                    </div>
                    <div class="collapse-title my-2 text-xl bg-primary text-white text- font-medium">
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> what is Node.js
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;