import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    position: fixed;

    width: 100%;
    padding: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BG.secondary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    > img {
        width: 250px;
    }
`;