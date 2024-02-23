import styled from "styled-components";

export const Container = styled.div`
    grid-area: gallery;

    padding: 20rem 10rem 2rem;

    display: flex;
    flex-direction: column;

    gap: 10rem;

    > main {
        display: flex;
    }

    @media (max-width: 426px) {
        padding: 20rem 2rem 2rem;
    }
`;

export const GalleryWrapper = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10rem 2rem; 

    justify-content: center;
    align-items: center;

    @media (max-width: 426px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 10rem 2rem;
    }
`;

export const Button = styled.button`
    position: fixed;
    z-index: 200;
    top: 50%;
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.TEXT.orange};

    &.previous {
        left: 2rem;
    }

    &.next {
        right: 2rem;
    }

    &:disabled {
        color: ${({theme}) => theme.COLORS.TEXT.secondary};
        cursor: default;
    }

    @media (max-width: 426px) {
        top: 5rem;
        width: 3rem;
        height: 3rem;

        &.previous {
            left: 3rem;
        }

        &.next {
            right: 3rem;
        }
    }
`;