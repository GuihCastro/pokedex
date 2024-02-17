import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";

export function Card({ name }) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            const { id, types, sprites } = response.data;
            setPokemon({
                id,
                number: `#${String(id).padStart(3, "0")}`,
                avatar: sprites.other["official-artwork"].front_default,
                type: types,
            });
        });
    });

    return (
        <Container>
            <h2>{name}</h2>

            <img src={pokemon.avatar} alt={name} />

            <p>{pokemon.number}</p>

            {pokemon.type && (
                <div>
                    {pokemon.type.map(pokemonType => (
                        <span key={pokemonType.type.name} className="typeTag">{pokemonType.type.name}</span>
                    ))}
                </div>
            )}
        </Container>
    );
};