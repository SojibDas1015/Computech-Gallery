import React from 'react';
import '../../App.css'
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='bg-black/60 backdrop-blur-lg fixed top-0 left-0 w-full'>
            <div className="navbar justify-between max-w-[95%] md:max-w-[84%] mx-auto font-Poppins">
                <div>
                    <a className="btn-ghost text-xl"><span className='text-white'>Computech</span> <span className='font-bold text-white'>Gallery</span></a>
                </div>
                <ul className='hidden md:flex items-center gap-8 text-base text-white'>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Categories</li>
                    <li>How to Works</li>
                </ul>
                <div className="flex gap-5">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-[#EBF0F5]">
                            <div className="indicator">
                                <FaRegBell className='text-2xl rotate-6 text-black'/>
                                <span className="badge badge-sm indicator-item bg-[#0E2954] text-white">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow ">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;