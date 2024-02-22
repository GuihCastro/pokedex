import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { Card } from "../Card";

export function Gallery() {
  let pokemonQuantity = 9;
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
      const { results } = response.data;
      setPokemons(results);
    });
  }, [pokemonsOffsetApi]);

  const handlePreviousClick = () => {
    pokemonQuantity -= 9;
    setPokemonsOffsetApi(pokemonsOffsetApi - 9);
    useEffect(() => {
      api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
        const { results } = response.data;
        setPokemons(results);
      });
    }, [pokemonsOffsetApi]);
    location.reload();
  }

  const handleNextClick = () => {
    pokemonQuantity += 9;
    setPokemonsOffsetApi(pokemonsOffsetApi + 9);
    useEffect(() => {
      api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
        const { results } = response.data;
        setPokemons(results);
      });
    }, [pokemonsOffsetApi]);
    location.reload();
  }

  console.log(pokemons);

  return (
    <Container>

      <button onClick={handlePreviousClick} disabled={pokemonsOffsetApi == 0}>Previous</button>


      {pokemons.map((pokemon, index) => (
        <Card key={index} name={pokemon.name} />
      ))}

      <button onClick={handleNextClick} disabled={pokemonsOffsetApi == 1016}>Next</button>

    </Container>
  );
};