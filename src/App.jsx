import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import TableData from './Component/TableData/TableData'

function App() {
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
              <TableData></TableData>
              <div className='pt-10 md:p-0'>
                <table className='bg-white min-h-[340px] rounded-2xl w-full'>
                  <thead>
                    <tr className='border-b-2 border-[#DCE5F3]'>
                      <td className=' text-xl md:text-2xl font-semibold text-center px-9 py-4 text-[#0E2954]'>Favorite Items</td>
                    </tr>
                  </thead>
                  <tbody> 
                    <tr>
                      <td className='text-base text-xl font-semibold text-center px-9'>No favorites yet</td>
                    </tr>
                    <tr>
                      <td className='text-center text-sm px-9 pb-0 md:pb-9'>Click the heart icon on any item <br /> to add it to your favorites</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className='flex justify-between border-t-2 border-[#DCE5F3]'>
                      <td className='px-9 py-4 text-sm md:text-xl font-semibold'>Total bids Amount</td>
                      <td className='px-9 py-4 text-sm md:text-xl font-semibold'>$0000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
