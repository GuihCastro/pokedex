import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "header"
        "gallery";
`;