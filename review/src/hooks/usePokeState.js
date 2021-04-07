import { useState, useEffect } from 'react';
import { getSelectedPokemon, getPokemen } from './../services/PokeService';

const usePokeState = (initPokemen, initSelectedPokemon) => {
    const [pokemen, setPokemen] = useState(initPokemen);
    const [selectedPokemon, setSelectedPokemon] = useState(initSelectedPokemon);
  
    useEffect(() => {
      setPokemen(getPokemen());
    }, []);
  
    const handlePoke = (id) => {
      getSelectedPokemon(id)
        .then((data)=> {
          setSelectedPokemon(data);
        })
        .catch(err=> {
          console.log(err);
        })
    };
  
    return([selectedPokemon, handlePoke, pokemen]);
}

export default usePokeState;