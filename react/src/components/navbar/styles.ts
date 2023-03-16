import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 4.5rem;
    background-color: var(--detalhes);
    position: fixed;

    img {
        background: rgba(218, 218, 218, 0.33);
        padding: .5rem 1rem;
        border-radius: .5rem;
    }
`;