import { useState } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import TableData from './Component/TableData/TableData'
import { MdFavoriteBorder } from "react-icons/md";
import Favorite from './Favorite/Favorite';

function App() {
  const [products, setProduct] = useState([])
  const handleAddFavorite = (item) => {
    setProduct([...products, item])
  }
  const handleRemoveFavorite = (item) => {
    const remainingProducts = products.filter(product => product.id !== item.id);
    setProduct(remainingProducts)
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-[#EBF0F5]'>
        <div className="container pt-20 max-w-[95%] md:max-w-[84%] mx-auto pb-10">
          <div className="left-side ">
            <h1 className='text-3xl font-semibold'>Active Auctions</h1>
            <p className='pb-6'>Discover and bid on extraordinary items</p>
            <div className="right-side md:flex justify-between">
              <TableData handleAddFavorite={handleAddFavorite}></TableData>
              <div className='mt-10 md:m-0 bg-white rounded-2xl flex flex-col items-center min-h-80'>
                <div className='border-b-2 border-[#DCE5F3] w-full'>
                  <div className=' text-xl md:text-2xl font-semibold text-center px-9 py-4 text-[#0E2954] flex items-center justify-center gap-2'><span className='text-2xl md:text-3xl font-bold'><MdFavoriteBorder /></span> Favorite Items</div>
                </div>

                <table className='w-full pb-10 px-4'>
                  {
                    products.length > 0 ?

                      products.map(product => <Favorite key={product.id} 
                        handleRemoveFavorite={handleRemoveFavorite}
                        product={product}></Favorite>)

                      : <tbody>
                        <tr>
                          <td className='text-base md:text-xl font-semibold text-center px-9 py-4 md:py-9'>No favorites yet</td>
                        </tr>
                        <tr>
                          <td className='text-center text-sm px-9 pb-4 md:pb-9'>Click the heart icon on any item <br /> to add it to your favorites</td>
                        </tr>
                      </tbody>
                  }
                </table>
                <div className={`${products.length === 0 && 'border-t-2 border-[#DCE5F3] w-full'}`}>
                  <div className='flex justify-between '>
                    <div className='px-9 py-4 text-sm md:text-xl font-semibold'>Total bids Amount</div>
                    <div className='px-9 py-4 text-sm md:text-xl font-semibold'>$0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
