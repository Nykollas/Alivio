import React from 'react';

import { Header } from './components/header';
import { Hero } from './components/hero';
import { Solution } from './components/solution';
import { Video } from './components/video';
import SolutionStep from './components/solution/SolutionStep';
import "./index.css";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Solution></Solution>
      <Video></Video>
      <Product></Product>
    </>
  );
}

export default App;
