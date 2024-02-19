import { useEffect, useState } from "react";
import { Container, TypeTag } from "./styles";
import api from "../../services/api";

export function Card({ name }) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            const { id, name, types, sprites } = response.data;

            let backgroundColor = types[0].type.name;
            if (backgroundColor === 'normal' && types.length > 1) {
                backgroundColor = types[1].type.name;
            }

            setPokemon({
                id,
                name: name,
                number: `#${String(id).padStart(3, "0")}`,
                avatar: sprites.other["official-artwork"].front_default,
                type: types,
                backgroundColor: backgroundColor,
            });
        });
    });

    return (
        <Container color={pokemon.backgroundColor}>
            <div className="avatar">
                <img src={pokemon.avatar} alt={pokemon.name} />
            </div>

            <p>{pokemon.number}</p>

            <h2>{pokemon.name}</h2>

            {pokemon.type && (
                <div className="types">
                    {pokemon.type.map(pokemonType => (
                        <TypeTag 
                            key={pokemonType.type.name} 
                            color={pokemonType.type.name}
                        >
                            {pokemonType.type.name}
                        </TypeTag>
                    ))}
                </div>
            )}
        </Container>
    );
};