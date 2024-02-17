import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    width: fit-content;
    height: fit-content;
    padding: 5rem 2rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background-color: ${({ theme, color }) => theme.COLORS.CARD_BG[color]};

    border-radius: 1rem;

    > .avatar {
        position: absolute;
        top: -40%;

        width: 80%;

        align-self: center;
        
        img {
            width: 100%;
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.TEXT.secondary};
        font-size: 1.2rem;
        margin-top: 1.5rem;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.TEXT.primary};
        font-size: 2rem;
        text-transform: capitalize;
    }

    > .types {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
`;

export const TypeTag = styled.span`
    padding: 0.5rem 1rem;
    border-radius: 5rem;

    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.TEXT.primary};
    background-color: ${({ theme, color }) => theme.COLORS.TYPE_BG[color]};
`;