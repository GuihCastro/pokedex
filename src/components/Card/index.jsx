import { useEffect, useState } from "react";
import { Container, TypeTag, Modal, ModalCard } from "./styles";
import api from "../../services/api";

export function Card({ name }) {
    const [pokemon, setPokemon] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            const { id, name, types, sprites, height, weight, base_experience, stats } = response.data;

            let backgroundColor = types[0].type.name;
            if (backgroundColor === 'normal' && types.length > 1) {
                backgroundColor = types[1].type.name;
            }

            setPokemon({
                id,
                name: name,
                number: `#${String(id).padStart(3, "0")}`,
                height: height,
                weight: weight,
                xp: base_experience,
                avatar: sprites.other["official-artwork"].front_default,
                type: types,
                stats: stats,
                backgroundColor: backgroundColor,
            });
        });
    });

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <Container
                color={pokemon.backgroundColor}
                onClick={openModal}
            >
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

            <Modal className={modalOpen ? 'open' : 'closed'}>
                <ModalCard color={pokemon.backgroundColor}>
                    <div className="selectedAvatar">
                        <img src={pokemon.avatar} alt={pokemon.name} />
                    </div>

                    <div className="info">
                        <div className="info__1">
                            <h2>{pokemon.name}</h2>

                            {pokemon.type && (
                                <div className="types">
                                    {pokemon.type.map(pokemonType => (
                                        <TypeTag
                                            key={pokemonType.type.name}
                                            color={pokemonType.type.name}
                                            className="onDetail"
                                        >
                                            {pokemonType.type.name}
                                        </TypeTag>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p>
                            <h3>Pokédex index:</h3> <span>{pokemon.number}</span>
                        </p>

                        <p>
                            <h3>Base experience:</h3> <span>{pokemon.xp}</span>
                        </p>

                        <p>
                            <h3>Height:</h3> <span>{pokemon.height}</span>
                        </p>

                        <p>
                            <h3>Weight:</h3> <span>{pokemon.weight}</span>
                        </p>

                        {pokemon.stats && (
                                <div className="stats">
                                    <h3>Pokémon stats</h3>
                                    {pokemon.stats.map(stat => (
                                        <p
                                            key={stat.stat.name}
                                            className="onDetail"
                                        >
                                            <h4>{stat.stat.name}:</h4> <span>{stat.base_stat}</span>
                                        </p>
                                    ))}
                                </div>
                            )}
                    </div>
                </ModalCard>
            </Modal>
        </>
    );
};