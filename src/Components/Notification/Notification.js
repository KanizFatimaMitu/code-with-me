import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
    return (
        <div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn m-1 bg-primary"><FontAwesomeIcon icon={faBell} /></label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className='hover:bg-primary'>New class uploded</a>
                    </li>
                    <li>
                        <a className='hover:bg-primary'>important notice</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Notification;