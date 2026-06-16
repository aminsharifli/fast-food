import React from 'react'
import { Link } from 'react-router';
import logoImg from '../../assets/img/fastfood.png';

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logoImg} alt="Fast Food Logo" className="h-16 w-auto object-contain brightness-110 contrast-125" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pt-2">Ən təzə ərzaqlarla, sürətli və dadlı fast-food təcrübəsi. Hər dişləmdə xoşbəxtlik!</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Naviqasiya</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/" className="hover:text-orange-500 transition-colors duration-200">Ana Səhifə</Link></li>
                <li><Link to="/Menyu" className="hover:text-orange-500 transition-colors duration-200">Menyu</Link></li>
                <li><Link to="/Haqqımızda" className="hover:text-orange-500 transition-colors duration-200">Haqqımızda</Link></li>
                <li><Link to="/Əlaqə" className="hover:text-orange-500 transition-colors duration-200">Əlaqə</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Əlaqə</h3>
              <ul className="space-y-2.5 text-sm mb-4">
                <li className="flex items-center gap-2">📍 <span className="text-gray-400">Bakı şəhəri</span></li>
                <li className="flex items-center gap-2">📞 <span className="text-gray-400">+994 (00) 00 00 00</span></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Fast Food. Amin Sharifli.</p>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer