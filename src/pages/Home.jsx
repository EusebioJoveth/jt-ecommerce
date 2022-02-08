import React from 'react';
import Anuncio from '../components/Anuncio';
import Boletinnoticia from '../components/Boletinnoticia';
import Categoria from '../components/Categoria';
import Navbar from '../components/Navbar';
import { Produtos } from '../components/Produtos';
import Slider from '../components/Slider';

const Home = () => {
  return (
      <div>
          <Anuncio />
          <Navbar />
          <Slider />
          <Categoria />
          <Produtos />
          <Boletinnoticia />
      </div>
  )
};

export default Home;

