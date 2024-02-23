import styled, { keyframes } from "styled-components";

const modalOpenAnimation = keyframes`
    0% {
        transform: translate3d(0, -100px, 0);
        transform-origin: 0% 0%;
        opacity: 0;
    }

    10% {
		opacity: 0;
	}

    100% {
        transform: translate3d(0, 0, 0);
        transform-origin: 0% 0%;
        opacity: 1;
    }
`;

const cardLoadAnimation = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

export const Container = styled.div`
    align-self: center;
    justify-self: center;

    position: relative;

    width: 100%;
    height: 100%;
    padding: 40% 2rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background-color: ${({ theme, color }) => theme.COLORS.CARD_BG[color]};

    border-radius: 1rem;

    transition: all 0.3s;

    animation: ${cardLoadAnimation} .5s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }

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

    &.onDetail {
        font-weight: bold;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.TEXT.black};
    }
`;

export const Modal = styled.div`
    &.open {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #00000050;
        backdrop-filter: blur(2px);
        overflow: hidden;
    }

    &.closed {
        display: none;
    }
`;

export const ModalCard = styled.div`
    position: relative;

    max-width: 90%;
    max-height: 90%;

    display: flex;
    flex-direction: column;

    padding: 0 0 2rem;

    background-color: ${({ theme }) => theme.COLORS.TEXT.primary};

    border-radius: 2rem;

    animation: ${modalOpenAnimation} .5s ease-in-out;

    > div.selectedAvatar {
        width: 100%;

        div.image {
            text-align: center;
            background-color: ${({ theme, color }) => theme.COLORS.CARD_BG[color]};
            border-radius: 2rem;

            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);

            img {
                max-width: 80%;
            }
        }

        div.modalHeader {
            padding: 2rem 1rem 0;

            div.modalHeader__title {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 2rem;
                border-bottom: 1px solid ${({ theme, color }) => theme.COLORS.CARD_BG[color]};

                h2 {
                    color: ${({ theme }) => theme.COLORS.TEXT.black};
                    text-transform: uppercase;
                    font-weight: bold;
                }

                .types {
                    display: flex;
                    gap: 0.5rem;
                }
            }
        }
    }
`;

export const ModalInfo = styled.div`
    width: 100%;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    color: ${({ theme }) => theme.COLORS.TEXT.black};

    overflow: auto;

    &::-webkit-scrollbar {
        display: block;
        width: 10px;
    }

    .info__center {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .info__line {
        display: flex;
        gap: 1rem;
        justify-content: center;

        p {
            color: ${({ theme, color }) => theme.COLORS.TYPE_BG[color]};
            text-transform: uppercase;
        }
    }

    .stats {
        align-self: flex-start;
        flex-direction: column;
        gap: .5rem;

        &.show {
            display: flex;
        }

        &.hide {
            display: none;
        }
    }

    .stats__line {
        display: flex;
        gap: .5rem;
    }

    .subtitle {
        align-self: center;
    }
`;

export const ModalCloseButton = styled.button`
    position: absolute;

    top: 2rem;
    right: 2rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.TEXT.black};
    border: none;
`;