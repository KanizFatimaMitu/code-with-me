import React from 'react';
import { NavLink } from 'react-router-dom';
import Notification from '../../Components/Notification/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faSignIn } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div >
            <div class="navbar fixed top-0 z-20 bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li >
                                <NavLink to='/classes' className='justify-between text-white font-bold'>Classes</NavLink>
                            </li>
                            <li tabindex="0">
                                <NavLink to='/blog' class="justify-between text-white font-bold">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' className='justify-between text-white font-bold'>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to='/signup' className='justify-between text-white font-bold'><FontAwesomeIcon  icon={ faSignIn} /></NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to='/' class="btn btn-ghost  text-xl font-bold">Code<span className='text-info font-bold text-3xl'>W</span>Kaniz</NavLink>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/classes' className='text-white  font-bold'>Classes</NavLink>
                        </li>
                        <li tabindex="0">
                            <NavLink to='/blog' className='text-white font-bold'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile' className='text-white font-bold'>Profile</NavLink>
                        </li>
                        <li>
                                <NavLink to='/signup' className='justify-between text-white font-bold'><FontAwesomeIcon  icon={ faSignIn} /></NavLink>
                            </li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <Notification></Notification>
                </div>
            </div>
        </div>
    );
};

export default Header;