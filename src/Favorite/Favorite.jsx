import React from 'react';

const Favorite = ({ product, handleRemoveFavorite }) => {
    return (
        <tbody className='border-b-2 border-[#DCE5F3] text-black'>
            <tr>
                <td rowSpan={2}><img className='w-20 p-2' src={product.image} alt="" /></td>
                <td className=''>{product.title}</td>
                <td onClick={()=> handleRemoveFavorite(product)} className='ml-10 cursor-pointer'><span className='bg-red-800 px-2 rounded-full font-semibold text-white'>X</span></td>
            </tr>
            <tr>
                <td>${product.currentBidPrice}</td>
                <td>Bids: {product.bidsCount}</td>
            </tr>
        </tbody>
    );
};

export default Favorite;