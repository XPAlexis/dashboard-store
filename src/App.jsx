import {
  RiPieChart2Line,
  RiUser3Line,
  RiAddLine,
  RiMenu2Line,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiDeleteBin6Line
} from "react-icons/ri";
import { useState } from "react";
// Componentes
import Sidebar from "./components/shared/Sidebar"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  /* SI UN MISMO COMPONENTE TUVIERA LA MISMAS CLASES, MEJOR */
  const estiloBtn = "text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500";

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiUser3Line /></button>
        <button className="p-2"><RiAddLine /></button>
        <button onClick={toggleOrder} className="p-2"><RiPieChart2Line /></button>
        <button onClick={toggleMenu} className="text-whit p-2 transition-all">
          {showMenu ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/* Header */}
          <header>
            {/* Tittle and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Alex Resto</h1>
                <p className="text-gray-500">12 Marzo 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" placeholder="Search" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py2 pr-4 text-[#ec7c6a]
              before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]">
                Hot dishes
              </a>
              <a href="#" className="py2 pr-4">Cold dishes</a>
              <a href="#" className="py2 pr-4">Soap</a>
              <a href="#" className="py2">Grill</a>
            </nav>
          </header>
          {/* Tittle content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
              <img src="platillo.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-[22%] lg:right-0 h-full transition-all
        ${showOrder ? "right-0" : "-right-full"}`}>
          {/* Orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseLine onClick={toggleOrder} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
            <h1 className="text-2xl my-4">Orders #151416</h1>
            {/* Pills */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
              <button className={estiloBtn}>To Go</button>
              <button className={estiloBtn}>Delivery</button>
            </div>
            {/* Car */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Products */}
              <div className="h-[450px] md:h-[700px] lg:h-[540px] overflow-y-scroll">
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description  */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platillo.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-400">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" placeholder="Order note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                    </form>
                    <div>
                      <button className="border border-[#ec7c6a] p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-[#ec7c6a]" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description  */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platillo.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-400">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" placeholder="Order note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                    </form>
                    <div>
                      <button className="border border-[#ec7c6a] p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-[#ec7c6a]" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description  */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platillo.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-400">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" placeholder="Order note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                    </form>
                    <div>
                      <button className="border border-[#ec7c6a] p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-[#ec7c6a]" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description  */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platillo.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-400">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" placeholder="Order note..." className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                    </form>
                    <div>
                      <button className="border border-[#ec7c6a] p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-[#ec7c6a]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit payment */}
            <div className="absolute w-full bottom-0 left-0 bg-[#262837] p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                  Continue to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
