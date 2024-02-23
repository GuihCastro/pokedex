import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { Container, GalleryWrapper, Button } from "./styles";
import { Card } from "../Card";
import { Search } from "../Search";

export function Gallery() {
  let pokemonQuantity = 12;
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const maxPokemonQuantity = 1027;

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) {
      handleSearchPokemons();
    } else {
      api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
        const { results } = response.data;
        setPokemons(results);
      });
    }
  }, [pokemonSearch, pokemonsOffsetApi]);

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${maxPokemonQuantity}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());
    const pokemonsSearch = response.data.results.filter(
      ({ name }) => name.includes(pokemonSearch),
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  const handlePreviousClick = () => {
    pokemonQuantity -= 12;
    setPokemonsOffsetApi(pokemonsOffsetApi - 12);
    useEffect(() => {
      api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
        const { results } = response.data;
        setPokemons(results);
      });
    }, [pokemonsOffsetApi]);
    location.reload();
  }

  const handleNextClick = () => {
    pokemonQuantity += 12;
    setPokemonsOffsetApi(pokemonsOffsetApi + 12);
    useEffect(() => {
      api.get(`/pokemon?limit=${pokemonQuantity}&offset=${pokemonsOffsetApi}`).then(response => {
        const { results } = response.data;
        setPokemons(results);
      });
    }, [pokemonsOffsetApi]);
    location.reload();
  }

  return (
    <Container>

      <Search value={pokemonSearch} onChange={setPokemonSearch} onClick={handleSearchPokemons} />

      <main>
        <Button onClick={handlePreviousClick} className="previous" disabled={pokemonsOffsetApi == 0}>
          <FaMinusCircle size={60} />
        </Button>

        <GalleryWrapper>
          {pokemons.map((pokemon, index) => (
            <Card key={index} name={pokemon.name} />
          ))}
        </GalleryWrapper>

        <Button onClick={handleNextClick} className="next" disabled={pokemonsOffsetApi == 1016}>
          <FaPlusCircle size={60} />
        </Button>
      </main>

    </Container>
  );
};