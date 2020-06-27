import React from 'react';

import { Header } from './components/header';
import { Hero }  from './components/hero';
import { Solution } from './components/solution';
import "./index.css";
import SolutionStep from './components/solution/SolutionStep';
function App() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Solution></Solution>
    </>
  );
}

export default App;
