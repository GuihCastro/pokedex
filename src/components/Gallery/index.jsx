import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { Card } from "../Card";

export function Gallery() {
  const pokemonQuantity = 10;
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
      const { results } = response.data;
      setPokemons(results);
    });
  }, [pokemonsOffsetApi]);

  console.log(pokemons);

  return (
    <Container>

      {pokemons.map((pokemon, index) => (  
        <Card key={index} name={pokemon.name} />
      ))}

    </Container>
  );
};