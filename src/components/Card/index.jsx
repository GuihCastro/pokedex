import { useEffect, useState, useRef } from "react";
import { Container, TypeTag, Modal, ModalCard, ModalInfo, ModalCloseButton } from "./styles";
import api from "../../services/api";

export function Card({ name }) {
    const [pokemon, setPokemon] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const modalRef = useRef(null);

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

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleStatsClick = () => {
        setShowStats(!showStats);
    }

    const handleOutsideClick = (e) => {
        if (modalRef.current !== null && !modalRef.current.contains(e.target)) {
            setModalOpen(!modalOpen); 
        }
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

            <Modal className={modalOpen ? 'open' : 'closed'} onClick={(event) => handleOutsideClick(event)}>
                <ModalCard color={pokemon.backgroundColor} ref={modalRef}>
                    <ModalCloseButton onClick={closeModal}>
                        X
                    </ModalCloseButton>

                    <div className="selectedAvatar">
                        <div className="image">
                            <img src={pokemon.avatar} alt={pokemon.name} />
                        </div>

                        <div className="info__1">
                            <div className="info__1__1">
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
                        </div>
                    </div>

                    <ModalInfo>
                        <div className="info__line">
                            <h3>Pokédex index:</h3> <span>{pokemon.number}</span>
                        </div>

                        <div className="info__line">
                            <h3>Base experience:</h3> <span>{pokemon.xp}</span>
                        </div>

                        <div className="info__line">
                            <h3>Height:</h3> <span>{pokemon.height}</span>
                        </div>

                        <div className="info__line">
                            <h3>Weight:</h3> <span>{pokemon.weight}</span>
                        </div>

                        <div className="info__line">
                            <h3><a onClick={handleStatsClick}>Pokémon stats</a></h3>
                        </div>

                        {pokemon.stats && (
                            <div className={showStats ? 'stats show' : 'stats hide'}>
                                {pokemon.stats.map(stat => (
                                    <div
                                        key={stat.stat.name}
                                        className="stats__line"
                                    >
                                        <h4>{stat.stat.name}:</h4> <span>{stat.base_stat}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ModalInfo>
                </ModalCard>
            </Modal>
        </>
    );
};