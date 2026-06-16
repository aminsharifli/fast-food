import React, { createContext, useState } from 'react'

export const BASKET = createContext([])
function BasketContext({ children }) {

    const [sebet,setSebet] = useState([])

    function addBasket(id, img, name, dsc, price){
        setSebet([...sebet, {id, img, name, dsc, price}])
    }
  return (
    <>
        <BASKET.Provider value={{addBasket,sebet}}>
            {children}
        </BASKET.Provider> 
    </>
  )
}

export default BasketContext
