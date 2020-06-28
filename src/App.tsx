import React from 'react';

import { Header } from './components/header';
import { Hero } from './components/hero';
import { Solution } from './components/solution';
import { Video } from './components/video';
import { Product } from './components/product';
import { Footer } from './components/footer';
import "./index.css";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Solution></Solution>
      <Video></Video>
      <Product></Product>
      <Footer></Footer>
    </>
  );
}

export default App;
