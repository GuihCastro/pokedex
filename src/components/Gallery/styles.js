import styled from "styled-components";

export const Container = styled.div`
    grid-area: gallery;

    width: 100%;
    min-height: 100vh;
    padding: 25rem 3rem 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* grid-template-rows: repeat(auto-fill, minmax(200px, 1fr)); */
    grid-gap: 10rem 2rem; 

    justify-content: center;
    align-items: center;

    overflow: auto;

    @media (max-width: 426px) {
        padding: 25rem 2rem 2rem;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 10rem 2rem;
    }

    > button {
        justify-self: center;
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.TEXT.orange};

        &:disabled {
            display: none;
        }
    }
`;