import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: none;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.1);
    border-radius: 4rem;
    padding: 1.6rem 3.2rem;
    border: 1px solid ${({theme}) => theme.COLORS.TEXT.primary};

    font-weight: 400;
    line-height: 2.2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
        background: none;
        cursor: pointer;
        border: none;
        color: ${({theme}) => theme.COLORS.TEXT.primary};
    }
`;

export const Input = styled.input`
    width: 100%;
    background: none;
    border: none;

    font-weight: 400;
    line-height: 22px;

    color: ${({theme}) => theme.COLORS.TEXT.primary};

    &:focus {
        box-shadow: 0;
        outline: 0;
    }
`;