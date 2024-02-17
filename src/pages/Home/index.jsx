import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery"; 

export function Home() {
    return (
        <Container>
            <Header />
            
            <Gallery />
        </Container>
    );
}; 