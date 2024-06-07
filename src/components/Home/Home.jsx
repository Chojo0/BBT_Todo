import React from 'react';
import './home.css';
import ActiveSlider from './ActiveSlider';
import BestSellersSlider from './BestSellersSlider'; // Asegúrate de importar el componente BestSellersSlider

const Home = () => {
  return (
    <section className="home">
      <ActiveSlider />
      <BestSellersSlider />
    </section>
  );
};

export default Home;
