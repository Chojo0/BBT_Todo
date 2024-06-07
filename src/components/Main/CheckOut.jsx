import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { IoIosCloseCircle } from "react-icons/io"

const Checkout = () => {

    const {car, precioTotal, vaciarCar} = useContext(CartContext);
    const [checkout, setCheckOut] = useState('checkOut') 
    const [pedidoId, setPedidoId] = useState('')
    const { register, handleSubmit } = useForm();

    const closeCheckOut = () =>{
        setCheckOut('checkOut')
    }

    const purchase = (data) => {
        const pedido = {
            cliente : data,
            productos : car,
            total: precioTotal()
        }

        const pedidoRef = collection(db, 'pedidos')

        addDoc(pedidoRef, pedido).then((doc) => {
            setPedidoId(doc.id)
        })
    }

  return (
    
    <div className= {checkout}>

            <h2 className='checkOutTitle'>Finalizar compra</h2>
            <form className='formulary' onSubmit={handleSubmit(purchase)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("name")} />
                <input type="text" placeholder='Ingresa tu direccion' {...register("direcc")} />
                <input type="email" placeholder='Ingresa tu correo' {...register("email")} />
                <button className='btn' type="submit">Enviar</button>

            </form>

            <div onClick={closeCheckOut} 
              className="closeCheckOut">
              <IoIosCloseCircle className='icon'/>
            </div>

        </div>
  )
}

export default Checkout