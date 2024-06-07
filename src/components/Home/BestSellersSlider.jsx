import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './BestSellersSlider.css';

const BestSellersSlider = () => {
  const { addedToCar, incrementarCantidad, decrementarCantidad } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMostExpensiveProducts = async () => {
      try {
        const productsRef = collection(db, 'productos');
        const querySnapshot = await getDocs(productsRef);
        const fetchedProducts = [];
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          fetchedProducts.push({ id: doc.id, ...product, cantidad: 1 });
        });
        fetchedProducts.sort((a, b) => b.precio - a.precio);
        const mostExpensiveProducts = fetchedProducts.slice(0, 6);
        setProducts(mostExpensiveProducts);
      } catch (error) {
        console.error('Error obteniendo productos:', error);
      }
    };

    fetchMostExpensiveProducts();
  }, []);

  const handleRestar = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.cantidad > 1
          ? { ...product, cantidad: product.cantidad - 1 }
          : product
      )
    );
  };

  const handleSumar = (id, stock) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.cantidad < stock
          ? { ...product, cantidad: product.cantidad + 1 }
          : product
      )
    );
  };
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="best-sellers-slider section container">
      <h1 data-aos="fade-right" className="home-title">Productos más vendidos y más caros</h1>
      <p data-aos="fade-right" className="home-description">Explora nuestros productos más populares y más caros</p>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="slide-container">
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${product.imagen})`, backgroundSize: 'cover' }}
            />
            <div className="slide-content">
              
              <h1 className="title">{product.nombre}</h1>
              <p className="content">{product.descripcion}</p>
              <p className="price">Precio: ${product.precio}</p>

              <div className="quantity-control">
                <button onClick={() => handleRestar(product.id)} className="btn">-</button>
                <span>{product.cantidad}</span>
                <button onClick={() => handleSumar(product.id, product.stock)} className="btn">+</button>
              </div>

              <button onClick={() => addedToCar(product, product.cantidad )} className="add-to-cart">
                <FaShoppingCart className="cart-icon" /> Agregar
              </button>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSellersSlider;
