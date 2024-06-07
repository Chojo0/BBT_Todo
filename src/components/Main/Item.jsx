import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div data-aos='fade-up' className='product'>

      <div className="imglist container">
        <img src={producto.imagen} alt={producto.nombre}/>
      </div>

      <div className='listInfo'>
          <h4 className='prodTitle'>{producto.nombre}</h4>
          <p>precio: ${producto.precio}</p>
          <p>Categoria: {producto.categoria}</p>
          <button className="btn">
            <Link className='verMas' to={`/item/${producto.id}`}>Ver más</Link>
          </button>
          

      </div>

    </div>

  )
}

export default Item