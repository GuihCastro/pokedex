import { Container, Input } from "./styles";
import { IoSearch } from "react-icons/io5";

export function Search({ value, onChange, onClick }) {
    return (
        <>
            <Container>
                <Input
                    id="find-pokemon"
                    type="text"
                    value={value}
                    placeholder="Pesquisar pokémon"
                    onChange={e => onChange(e.target.value)}
                    maxLength={20}
                >
                </Input>

                <button onClick={onClick}><IoSearch /></button>
            </Container>
        </>
    )
}