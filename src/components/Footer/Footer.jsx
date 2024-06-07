import React, {useEffect} from 'react'
import './footer.css'
import { BsSend } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";


import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data)
  }
  
  return (
    
    <section className='footer'>
      <div className="secContent container">
        <div data-aos='fade-up' className="contactDiv flex">
          <div className="text">
            <small>Mantente Informado</small>
            <h2>Pide con nosotros</h2>
          </div>

          <form className="inputDiv flex" onSubmit={handleSubmit(enviar)}>
            <input type="email"  placeholder='Introduzca su correo' {...register("email")}/>
            <button className="btn flex" type='submit'>
              Enviar <BsSend className='icon'/>
            </button>
          </form>
        </div>

        <div data-aos='fade-up' className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link to="/productos" className='logo flex'>
                <IoSearch className='icon'/> Buscar Productos
              </Link>
            </div>

            <div className="footerParagraph">Somos la licorera</div>

            <div className="footerSocials flex">
              <FaYoutube className='icon'/>
              <FaFacebook className='icon'/>
              <FaInstagram  className='icon'/>
              <FaTiktok  className='icon'/>
              <FaWhatsapp className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                Informacion
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Nosotros
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                <Link to='https://syctrace.org/' className='link' >Verifica tu botella</Link>
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Terminos y condiciones
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Compras al por mayor
              </li>


            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                Contactanos
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                BBTodo@gmail.com
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                WhatsApp: 3102896575
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bucaramanga - Santander
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.</small>
            <small>COPYRIGHTS RESERVED - CHOJO 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer