import React, { useEffect, useState } from 'react';
import TableItem from '../../TableItem/TableItem';

const TableData = ({handleAddFavorite, products}) => {
    const [data, setData ] = useState([])
    useEffect(()=>{
        fetch('computech.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <table className='bg-white rounded-2xl'>
                <thead>
                    <tr className='text-[12px] md:text-base font-bold text-black'>
                        <td className='p-2 md:p-5'>Items</td>
                        <td className='p-2 md:p-5'>Current Bid</td>
                        <td className='p-2 md:p-5'>Time Left</td>
                        <td className='p-2 md:p-5'>Bid Now</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map(data=> <TableItem key={data.id} 
                            handleAddFavorite={handleAddFavorite}
                            products={products}
                            data={data}></TableItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableData;