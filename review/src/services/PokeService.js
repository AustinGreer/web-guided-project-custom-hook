const getPokemen = () => {
    return(data);
}

const getSelectedPokemon = (id) => {
return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
            return res.data;
        });
}