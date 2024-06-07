import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const InitialCar = () => {
  try {
    const carFromLocalStorage = localStorage.getItem("car");
    return carFromLocalStorage ? JSON.parse(carFromLocalStorage) : [];
  } catch (error) {
    console.error("Error parsing JSON from localStorage", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [car, setCar] = useState(InitialCar);

  const addedToCar = (item, cantidad) => {
    const existingProductIndex = car.findIndex((product) => product.id === item.id);

    if (existingProductIndex !== -1) {
      const updatedCar = [...car];
      updatedCar[existingProductIndex].cantidad += cantidad;
      setCar(updatedCar);
    } else {
      const newItem = { ...item, cantidad };
      setCar([...car, newItem]);
    }
  };

  const incrementarCantidad = (productId) => {
    const updatedCar = car.map((product) => {
      if (product.id === productId) {
        return { ...product, cantidad: product.cantidad + 1 };
      }
      return product;
    });
    setCar(updatedCar);
  };

  const decrementarCantidad = (productId) => {
    let updatedCar = car.map((product) => {
      if (product.id === productId) {
        return { ...product, cantidad: product.cantidad - 1 };
      }
      return product;
    });

    updatedCar = updatedCar.filter((product) => product.cantidad > 0);

    setCar(updatedCar);
  };

  const quantityInCar = () => {
    return car.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return car.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCar = () => {
    setCar([]);
  };

  useEffect(() => {
    localStorage.setItem("car", JSON.stringify(car));
  }, [car]);

  return (
    <CartContext.Provider
      value={{
        car,
        addedToCar,
        incrementarCantidad,
        decrementarCantidad,
        quantityInCar,
        precioTotal,
        vaciarCar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
