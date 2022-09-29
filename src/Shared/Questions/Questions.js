import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Questions = () => {
    const [ques, setQues] = useState()

        useEffect(()=>{
            fetch('')
        },[])

    return (
        <div className='mx-16 my-8 lg:mx-40 lg:my-16'>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title  bg-base-300 text-gray-300 font-bold text-center text-xl peer-checked:bg-neutral peer-checked:text-info">
                    <FontAwesomeIcon icon={ faArrowsDownToLine }></FontAwesomeIcon>  Click me to show all recent questions
                </div>
                <div class="collapse-content bg-primary font-bold text-primary peer-checked:bg-neutral peer-checked:text-info">
                    <div class="collapse-title my-2 text-xl bg-primary text-white text- font-medium">
                       <FontAwesomeIcon icon= { faCheck }></FontAwesomeIcon> what is database ?
                    </div>
                    <div class="collapse-title my-2 text-xl bg-primary text-white text- font-medium">
                       <FontAwesomeIcon icon= { faCheck }></FontAwesomeIcon> what is the Difference between query & params ?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;