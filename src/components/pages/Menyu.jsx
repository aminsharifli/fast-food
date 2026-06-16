import React, { useContext, useEffect, useState } from 'react'
import { getData  } from '../service/Api'
import { foodData} from '../Context/DataContext'
import { BASKET } from '../Context/BasketContext'

function Menyu() {
    const {food} = useContext(foodData)
    const {addBasket} = useContext( BASKET )
  return (
    <>
        <div className="bg-gray-50 min-h-screen py-16 font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Dadlı <span className="text-red-600">Menyumuz</span> 🔥</h2>
                        <p className="text-gray-500 text-sm sm:text-base mt-2">Heç bir gözləmə olmadan, dərhal seç və dadını çıxart!</p>
                    </div>
                    <div className="mb-20">
                        <h1 className="text-3xl font-black text-gray-900 mb-8 border-b-2 border-red-500 pb-3 inline-block">🍔 Burgerlər və 🍕 Pizzalar</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                food?.map((item, i) => (
                                    <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
                                        <div className="bg-gray-100/70 h-48 flex items-center justify-center relative overflow-hidden">
                                            <img src={item.img} alt="" className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-300 select-none drop-shadow-md"/>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors duration-200">{item.name}</h3>
                                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.dsc}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-2">
                                                <span className="text-xl font-black text-red-600">{item.price} ₼</span>
                                                <button onClick={()=> addBasket(item.id, item.img, item.name, item.dsc, item.price)} className="bg-gray-900 text-white px-4 py-2.5 rounded-2xl font-bold hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 text-sm shadow-sm">
                                                    <span>Səbətə At</span> 🛒
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Menyu
