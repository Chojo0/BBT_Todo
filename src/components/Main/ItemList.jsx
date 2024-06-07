import Item from "./Item"
import {useEffect} from 'react'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({productos ,title}) => {
  
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className="listProducts container">
        <h2 data-aos='fade-right' className="mainTitle">{capitalizeFirstLetter(title)}</h2>

        <div className="products grid">
            {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList