import React from 'react';
import { SiIlovepdf } from "react-icons/si";
const TableItem = ({ data }) => {
    console.log(data)
    return (
        <tr className='p-5 border-t-2 border-[#DCE5F3] text-base font-semibold'>
            <td className='p-5 flex gap-2 items-center'><img className='w-30' src={data.image} alt="" />{data.title}</td>
            <td className='p-5'>${data.currentBidPrice}</td>
            <td className='p-5'>{data.timeLeft}</td>
            <td className='p-5'><SiIlovepdf /></td>
        </tr>
    );
};

export default TableItem;