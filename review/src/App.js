import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import data from "./../data";

import axios from 'axios';

const getPokemen = () => {
  return(data);
}

const getSelectedPokemon = () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getSelectedPokemon()
      .then((data)=> {
        getSelectedPokemon(data);
      })
      .catch(err=> {
        console.log(err);
      })
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
