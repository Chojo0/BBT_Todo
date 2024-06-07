import React, { useContext, useState } from 'react'
import './navbar.css'
import { GiMeltingIceCube } from 'react-icons/gi'
import { IoIosCloseCircle } from "react-icons/io"
import { RxDotsVertical } from "react-icons/rx"
import { HiShoppingCart } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { CartContext } from '../../context/CartContext'

const Navbar = () => {

  const [active, setActive] = useState('navBar') 
  const [login, setLogin] = useState('login') 

  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () =>{
    setActive('navBar')
  }

  const showLogin = () =>{
    setLogin('login activeLogin'),
    setActive('navBar')
  }

  const closeLogin = () =>{
    setLogin('login')
  }

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data)
  }

  const {quantityInCar} = useContext(CartContext);


  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logDiv">
          <Link to="/" className="logo flex">
            <h1><GiMeltingIceCube className='icon'/> BBT Todo</h1>
          </Link>
        </div>

        <div className= {active}>
          <ul className="navLists flex">

            <li className="navItem">
              <Link to="/" className="navLink">Inicio</Link>
            </li>

            <li className="navItem">
              <Link to="/productos" className="navLink">Productos</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Contacto</Link>
            </li>

            <button className='btn' onClick={showLogin} >
              <Link>Login</Link>
            </button>

            <button className='btn flex'>
              <Link to="/car">
                <HiShoppingCart className='car' />
                <span className='carQuantity' > { quantityInCar() } </span>
              </Link>
            </button>

          </ul>

          <div onClick={removeNavbar} 
          className="closeNavbar">
            <IoIosCloseCircle className='icon'/>
          </div>
        </div>

        <div className= {login}>

            <h2 className='loginTitle'>Login</h2>
            <form className='formulary' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresa tu usuario' {...register("name")} />
                <input type="password" placeholder='Ingresa tu contraseña' {...register("email")} />
                <button className='btn' type="submit">Enviar</button>

            </form>

            <div onClick={closeLogin} 
              className="closeLogin">
              <IoIosCloseCircle className='icon'/>
            </div>

        </div>

        <div onClick={showNav} 
        className="toggleNavbar">
          <RxDotsVertical className='icon'/>
        </div>

      </header>
    </section>
  )
}

export default Navbar
