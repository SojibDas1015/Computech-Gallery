import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
const TableItem = ({ data, handleAddFavorite, products }) => {
    const active = products.find(p => p.id == data.id)
    return (
        <tr className='p-5 border-t-2 border-[#DCE5F3] text-base font-semibold text-[#0E2954]'>
            <td className='px-2 md:px-5 py-2 flex gap-2 items-center text-[12px] md:text-base'><img className='w-15 md:w-30' src={data.image} alt="" />{data.title}</td>
            <td className='px-2 md:px-5 py-2 text-[12px] md:text-base'>${data.currentBidPrice}</td>
            <td className='px-2 md:px-5 py-2 text-[12px] md:text-base'>{data.timeLeft}</td>
            <td onClick={() => handleAddFavorite(data)} className='px-2 md:px-5 py-2 text-[12px] md:text-2xl font-bold'><button disabled={active} className={`flex justify-center ${active ? 'cursor-not-allowed' : 'cursor-pointer'}`}> {
                active ? <MdFavorite className='text-red-700'/> : <MdFavoriteBorder />
                }
            </button>
            </td>
        </tr>
    );
};

export default TableItem;