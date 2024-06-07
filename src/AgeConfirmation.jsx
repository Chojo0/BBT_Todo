import React, { useState } from 'react';
import './AgeConfirmation.css';

const AgeConfirmation = ({ onConfirm }) => {
    const [isUnderageSelected, setIsUnderageSelected] = useState(false); // Estado para controlar si se seleccionó la opción de ser menor de 18

    const handleConfirm = (isAdult) => {
        if (isAdult) {
            onConfirm(isAdult);
        } else {
            setIsUnderageSelected(true); // Marca que se ha seleccionado ser menor de 18
        }
    };

    return (
        <div className="age-confirmation">
            <div className="overlay"></div> {/* Contenedor para el fondo opaco */}
            <div className="content">
                <h1 className='textTitle1' >Bienvenido</h1>
                <img src="https://media.minutouno.com/p/faf3039cf2a8e480befdbf9ed2c01713/adjuntos/150/imagenes/023/294/0023294359/610x0/smart/fiestapng.png" alt="Foto de Bienvenida" className="welcome-image" />
                <h2 className='textTitle2'>BBT Todo</h2>
                <p className='pp'>PARA INGRESAR A ESTE SITIO WEB DEBES SER MAYOR DE EDAD.</p>
                {isUnderageSelected ? (
                    <p>Lo siento, debes ser mayor de 18 años para ingresar.</p>
                ) : (
                    <div className="buttons-container">
                        <button onClick={() => handleConfirm(true)}>Soy mayor de +18</button>
                        <button onClick={() => handleConfirm(false)}>Soy menor de -18</button>
                    </div>
                )}
                <p className='pp'>El exceso de alcohol es perjudicial para la salud.</p>
            </div>
        </div>
    );
}

export default AgeConfirmation;
