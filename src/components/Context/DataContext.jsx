import { create } from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../service/Api'

export const foodData = createContext([])

function DataContext({ children }) {
    const [food, setFood] = useState(null)
    useEffect(() => {
        getData().then(res=>setFood(res))
    },[])
  return (
    <>
        <foodData.Provider value={{food}}>
            {children}
        </foodData.Provider>
    </>
  )
}

export default DataContext
