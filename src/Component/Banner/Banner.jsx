import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://static.vecteezy.com/system/resources/thumbnails/071/785/601/small/nature-infused-gaming-sanctuary-green-lit-pc-setup-overlooking-a-lush-forest-free-photo.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="max-w-[84%] text-neutral-content text-center md:text-left">
                    <div className="max-w-6/10">
                        <h1 className="mb-5 text-5xl font-bold">Upgrade Your Digital World with Cutting-Edge Tech</h1>
                        <p className="mb-5">
                            Explore our curated collection of high-performance components, professional workstations, and next-gen peripherals. From rare GPU finds to custom-built rigs, get the power you need to lead the future.
                        </p>
                        <button className="btn rounded-full bg-white text-black">Explore All Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;