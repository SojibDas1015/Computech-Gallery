import React from 'react';
import '../../App.css'
const Navbar = () => {
    return (
        <div className='bg-black/5 backdrop-blur-lg fixed top-0 left-0 w-full'>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
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



// kiso kaj
// import { useState } from 'react';
// import './App.css'
// import Banner from './Component/Banner/Banner'
// import Navbar from './Component/Navbar/Navbar'
// import TableData from './Component/TableData/TableData'
// import { MdFavoriteBorder } from "react-icons/md";
// import Favorite from './Favorite/Favorite';

// function App() {
//   const [products, setProduct] = useState([])
//   const handleAddFavorite = (item) => {
//     setProduct([...products, item])
//   }
//   return (
//     <>
//       <Navbar></Navbar>
//       <Banner></Banner>
//       <div className='bg-[#EBF0F5]'>
//         <div className="container pt-20 max-w-[95%] md:max-w-[84%] mx-auto pb-10">
//           <div className="left-side ">
//             <h1 className='text-3xl font-semibold'>Active Auctions</h1>
//             <p className='pb-6'>Discover and bid on extraordinary items</p>
//             <div className="right-side md:flex justify-between">
//               <TableData handleAddFavorite={handleAddFavorite}></TableData>
//               <div className='pt-10 md:p-0'>
//                 <table className='bg-white min-h-[340px] rounded-2xl w-full border'>
//                   <thead>
//                     <tr className='border-b-2 border-[#DCE5F3]'>
//                       <td className=' text-xl md:text-2xl font-semibold text-center px-9 py-4 text-[#0E2954] flex items-center justify-center gap-2'><span className='text-2xl md:text-3xl font-bold'><MdFavoriteBorder /></span> Favorite Items</td>
//                     </tr>
//                   </thead>
//                   {
//                     products.length > 0 ?

//                       products.map(product => <Favorite key={product.id} product={product}></Favorite>)

//                       : <tbody>
//                         <tr>
//                           <td className='text-base md:text-xl font-semibold text-center px-9 md:py-9'>No favorites yet</td>
//                         </tr>
//                         <tr>
//                           <td className='text-center text-sm px-9 pb-0 md:pb-9'>Click the heart icon on any item <br /> to add it to your favorites</td>
//                         </tr>
//                       </tbody>
//                   }

//                   <tfoot>
//                     <tr className='flex justify-between border-t-2 border-[#DCE5F3]'>
//                       <td className='px-9 py-4 text-sm md:text-xl font-semibold'>Total bids Amount</td>
//                       <td className='px-9 py-4 text-sm md:text-xl font-semibold'>$0000</td>
//                     </tr>
//                   </tfoot>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </>
//   )
// }

// export default App

    );
};

export default Navbar;