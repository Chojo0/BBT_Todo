import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Car = () => {
    const { car, precioTotal, vaciarCar, incrementarCantidad, decrementarCantidad } = useContext(CartContext);
    const [checkout, setCheckOut] = useState('checkOut');
    const [purchaseComfirm, setPurchaseComfirm] = useState('purchaseComfirm');
    const [pedidoId, setPedidoId] = useState('');


    const handlerVaciar = () => {
        vaciarCar();
    };

    const showLCheckOut = () => {
        setCheckOut('checkOut activeCheckOut');
    };

    const closeCheckOut = () => {
        setCheckOut('checkOut');
    };

    const showPurchaseComfirm = () => {
        setPurchaseComfirm('purchaseComfirm activePurchaseComfirm');
        setCheckOut('checkOut');
    };

    const closePurchaseComfirm = () => {
        setPurchaseComfirm('purchaseComfirm');
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const purchase = (data) => {
        const pedido = {
            cliente: data,
            productos: car,
            total: precioTotal(),
        };

        const pedidoRef = collection(db, 'pedidos');

        addDoc(pedidoRef, pedido).then((doc) => {
            setPedidoId(doc.id);
            vaciarCar();
            showPurchaseComfirm();
        });
    };

    return (
        <div className='car container'>
            <h2 className="carTitle">Carrito</h2>

            <div className="carContain">
                {
                    car.map((prod) => (
                        <div key={prod.id} className='carDetails'>
                            <div className="imgCar">
                                <img src={prod.imagen} alt={prod.nombre} />
                            </div>

                            <div className="productInfo">
                                <h3>{prod.nombre}</h3>
                                <p>Precio unitario: ${prod.precio}</p>
                            </div>

                            <div className="productQuantity">
                              <button className='btn' onClick={() => decrementarCantidad(prod.id)} >-</button>
                              <p>Cantidad: {prod.cantidad}</p>
                              <button className='btn' onClick={() => incrementarCantidad(prod.id)} >+</button>
                            </div>

                            <div className="totalPrice">
                                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="cartSummary">
                {car.length > 0 ? (
                    <>
                        <h2 className='secondaryTitle'>Precio Total: ${precioTotal()}</h2>
                        <button className='btn' onClick={handlerVaciar}>Vaciar</button>
                        <button className='btn' onClick={showLCheckOut}>
                            <Link>Pagar</Link>
                        </button>
                    </>
                ) : (
                    <h2 className='secondaryTitle'>El carrito está vacío</h2>
                )}
            </div>

            <div className={checkout}>
                <h2 className='checkOutTitle'>Finalizar compra</h2>
                <form className='formulary' onSubmit={handleSubmit(purchase)}>
                    <input 
                        type='text' 
                        placeholder='Ingresa tu nombre' 
                        {...register("nombre", { required: "El nombre es obligatorio" })} 
                    />
                    {errors.nombre && <p className='error'>{errors.nombre.message}</p>}

                    <input 
                        type='text' 
                        placeholder='Ingresa tu dirección' 
                        {...register("direccion", { required: "La dirección es obligatoria" })} 
                    />
                    {errors.direccion && <p className='error'>{errors.direccion.message}</p>}

                    <input 
                        type='email' 
                        placeholder='Ingresa tu correo' 
                        {...register("email", { 
                            required: "El correo es obligatorio", 
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Ingresa un correo válido"
                            }
                        })} 
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}

                    <button className='btn' type="submit">Enviar</button>
                </form>

                <div onClick={closeCheckOut} className="closeCheckOut">
                    <IoIosCloseCircle className='icon' />
                </div>
            </div>

            <div className={purchaseComfirm}>
                <h2 className='purchaseTitle'>Muchas Gracias por tu compra</h2>
                <p className='idPedido'>Tu número de pedido es: {pedidoId}</p>
                <div onClick={closePurchaseComfirm} className="closePurchaseComfirm">
                    <IoIosCloseCircle className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Car;
