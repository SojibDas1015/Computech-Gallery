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
        <div className="container pt-20 flex justify-between max-w-[95%] md:max-w-[84%] mx-auto pb-10">
          <div className="left-side ">
            <h1 className='text-3xl font-semibold'>Active Auctions</h1>
            <p className='pb-6'>Discover and bid on extraordinary items</p>
            <div className="right-side flex justify-between gap-4">
              <TableData></TableData>
              <div className='p-5 bg-white rounded-2xl'>
                <table>
                  <thead>
                    <tr className='border-b-1'>
                      <td className='text-2xl font-semibold text-center'>Favorite Items</td>
                    </tr>
                  </thead>
                  <h2 className=''></h2>
                <h3>No favorites yet</h3>
                <p>Click the heart icon on any item to add it to your favorites</p>
                <div>
                  <h2>Total bids Amount</h2>
                  <h2>$0000</h2>
                </div>
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
