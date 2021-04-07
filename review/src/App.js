import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import data from "./../data";

import axios from 'axios';

const getPokemen = () => {
  return(data);
}



import SelectedPokemon from './components/SelectedPokemon';

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokeMen());
  }, []);

  const handlePoke = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setSelectedPokemon(res.data);
      });
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
