import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';

import { getPokemen, getSelectedPokemon} from './services/PokeService';

const usePokeState = () => {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getSelectedPokemon(id)
      .then((data)=> {
        console.log(data);
        setSelectedPokemon(data);
      })
      .catch(err=> {
        console.log(err);
      })
  };
}

function App() {
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
