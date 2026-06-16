import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/img/fastfood.png';
import { BASKET } from '../Context/BasketContext';

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { sebet } = useContext(BASKET);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 py-2">
            
            <div className="flex-shrink-0 flex items-center">
              <img src={logoImg} alt="Fast Food Logo" className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>

            <nav className="hidden md:flex space-x-8 font-medium text-base text-gray-600">
              <Link to={'/'} className="hover:text-orange-500 transition-colors duration-200">Ana Səhifə</Link>
              <Link to={'/Menyu'} className="hover:text-orange-500 transition-colors duration-200">Menyu</Link>
              <Link to={'/Əlaqə'} className="hover:text-orange-500 transition-colors duration-200">Haqqımızda</Link>
              <Link to={'/Haqqımızda'} className="hover:text-orange-500 transition-colors duration-200">Əlaqə</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button onClick={() => setOpenCart(true)} className="relative p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-xl">🛒</span>
                {sebet?.length === 0 ? '' : <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{sebet?.length}</span>}
              </button>

              <button className="hidden sm:block bg-orange-500 text-white px-5 py-2.5 rounded-full text-base font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 transition-all duration-300 transform hover:-translate-y-0.5">Sifariş Et</button>

              <button onClick={() => setOpenMenu(!openMenu)} className="block md:hidden p-2 text-gray-600 hover:text-orange-500 text-2xl transition-colors cursor-pointer">
                {openMenu ? '✕' : '☰'}
              </button>
            </div>

          </div>
        </div>

        {openMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-inner py-4 px-6 space-y-3 font-medium transition-all duration-300">
            <Link to={'/'} onClick={() => setOpenMenu(false)} className="block py-2 text-gray-600 hover:text-orange-500 border-b border-gray-50">Ana Səhifə</Link>
            <Link to={'/Menyu'} onClick={() => setOpenMenu(false)} className="block py-2 text-gray-600 hover:text-orange-500 border-b border-gray-50">Menyu</Link>
            <Link to={'/Əlaqə'} onClick={() => setOpenMenu(false)} className="block py-2 text-gray-600 hover:text-orange-500 border-b border-gray-50">Haqqımızda</Link>
            <Link to={'/Haqqımızda'} onClick={() => setOpenMenu(false)} className="block py-2 text-gray-600 hover:text-orange-500">Əlaqə</Link>
            <button className="w-full sm:hidden bg-orange-500 text-white py-3 rounded-xl text-center font-semibold mt-4">Sifariş Et 🚀</button>
          </div>
        )}
      </header>

      {openCart && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" onClick={() => setOpenCart(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
              
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">Səbətim 🛒</h2>
                <button onClick={() => setOpenCart(false)} className="text-gray-400 hover:text-red-500 text-2xl font-bold p-2 transition-colors duration-200 cursor-pointer">✕</button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(100vh-280px)]">
                {sebet?.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100 gap-4">
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-contain bg-white p-1 rounded-xl shadow-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400">1 ədəd</p>
                    </div>
                    <span className="font-black text-red-600 text-sm">{item.price} AZN</span>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
                <div className="flex justify-between items-center text-gray-900">
                  <span className="font-medium text-sm text-gray-500">Ümumi Məbləğ:</span>
                  <span className="text-2xl font-black text-red-600">Hələki hazır deyil !</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-red-600/20 text-center block cursor-pointer">Sifarişi Rəsmiləşdir 🚀</button>
                <button onClick={() => setOpenCart(false)} className="w-full text-center text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors py-1 cursor-pointer">Alış-verişə davam et</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;