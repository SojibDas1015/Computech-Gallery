import React from 'react';

const Footer = () => {
    return (
        <div className='py-20 text-center space-y-2 max-w-[95%] md:max-w-[84%] mx-auto'>
            <h2 className='text-black font-bold text-2xl text-center'><span className='font-normal'>Computech</span> Gallery</h2>
            <ul className='flex gap-5 justify-center items-center font-semibold'>
                <li>Bid.</li>
                <li>Win.</li>
                <li>Own.</li>
            </ul>
            <ul className='flex gap-5 items-center justify-center'>
                <li>Home</li>
                <li>Auctions</li>
                <li>Categories</li>
                <li>How to works</li>
            </ul>
            <p>© 2026 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;