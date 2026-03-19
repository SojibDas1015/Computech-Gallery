import React from 'react';

const Favorite = ({ product }) => {
    console.log(product)
    return (
        <tbody className='border-b-2 border-[#DCE5F3]'>
            <tr>
                <td rowSpan={2}><img className='w-20 p-2' src={product.image} alt="" /></td>
                <td className=''>{product.title}</td>
                <td className='pl-10'>x</td>
            </tr>
            <tr>
                <td>${product.currentBidPrice}</td>
                <td>Bids: {product.bidsCount}</td>
            </tr>
        </tbody>
    );
};

export default Favorite;