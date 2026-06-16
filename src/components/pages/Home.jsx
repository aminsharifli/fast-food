import React from 'react'
import logoImg from '../../assets/img/fastfood.png';
import { Link } from 'react-router';

function Home() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
      
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase inline-block">⚡ Sürətli Çatdırılma</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">Aclığa Sürətli Son! <br />Ən Dadlı <span className="text-red-600">Fast Food</span> Səni Gözləyir.</h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">Daxil ol, sevdiyin burger, pizza və ya qəlyanaltını seç, cəmi 30 dəqiqə ərzində qapına isti-isti çatdıraq.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Link to={'/Menyu'} className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-red-700/40 transition-all duration-300 transform hover:-translate-y-1">Sifariş ver</Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-amber-100 rounded-full filter blur-2xl opacity-60 -z-10 animate-pulse"></div>
            <img src={logoImg} alt="Fast Food Hero" className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] h-auto select-none transform hover:rotate-3 transition-transform duration-500 cursor-pointer drop-shadow-2xl" />
          </div>

        </section>

      </div>
    </>
  )
}

export default Home