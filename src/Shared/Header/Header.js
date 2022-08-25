import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><a className='text-info font-bold text-2xl'>Classes</a></li>
                            <li tabindex="0">
                                <a class="justify-between text-info font-bold">
                                    About
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2 text-info font-bold">
                                    <li><a>React</a></li>
                                    <li><a>Express js</a></li>
                                </ul>
                            </li>
                            <li><a className='text-info' >Profile</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Code<span className='text-primary font-bold text-xl'>W</span>Kaniz</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a className='text-info  font-bold'>Classes</a></li>
                        <li tabindex="0">
                            <a className='text-info font-bold'>
                               About
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 text-info font-bold">
                                <li><a>React</a></li>
                                <li><a>Express js</a></li>
                            </ul>
                        </li>
                        <li><a className='text-info font-bold'>Profile</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-primary">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;