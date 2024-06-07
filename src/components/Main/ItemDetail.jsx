import React, {useContext, useEffect, useState} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  const {car, addedToCar} = useContext(CartContext);
  console.log(car)

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }
  


  return (
    <div data-aos='fade-up'className="container">

        <div className="detail">
          
            <div className="imgDetail">
              <img src={item.imagen} alt={item.nombre} />
            </div>

            <div className="productDetail container">
                <h3 className="prodTitle">{item.nombre}</h3>
                <p className="categ">Categoria: {item.categoria}</p>
                <p className="price">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => (addedToCar(item, cantidad))}
                />
                <p className="descrip">{item.descripcion}</p>
            </div>

        </div>

    </div>
  )
}

export default ItemDetail