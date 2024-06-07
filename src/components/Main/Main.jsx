import React from 'react'
import './main.css'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Car from './Car'

const Main = () => {
  return (
    
    <section className='main container section'>
      
      <Routes>

        <Route path='/productos' element={<ItemListContainer/>} /> 
        <Route path='/productos/:categoria' element={<ItemListContainer/>} /> 
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/car' element={<Car />} />

      </Routes>    

    </section>
  )
}

export default Main