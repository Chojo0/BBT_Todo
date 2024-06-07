const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

    return (

      <div >

          <div className="itemCount">
              <button className="btn" onClick={handleRestar}>-</button>
              <p className="cantidad" >{cantidad}</p>
              <button className="btn" onClick={handleSumar}>+</button>
              <button className="btn" onClick={handleAgregar}>Agregar al carrito</button>
          </div>

          

      </div>

    )
  }
  
  export default ItemCount