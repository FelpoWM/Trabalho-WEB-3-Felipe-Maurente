import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49.5rem;
    height: 100vh;
    margin: auto;
    padding: 10rem 0 2rem 0;

    h1 {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 2rem;

        span {
            font-weight: 600;
        }
    }
`;

export const Tecnologias = styled.section`
    background-color: var(--detalhes);
    padding: 1rem 3rem;
    height: 10.8rem;
    border-radius: .5rem;
    margin-bottom: 15%;

    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;

        li {
            margin-bottom: .5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
    }
`;

export const Botoes = styled.div`
    width: 30rem;
    display: flex;
    justify-content: space-between;
    margin: auto;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8.3rem;
        height: 3.1rem;
        cursor: pointer;
        border-radius: .3rem;
        background-color: var(--detalhes);
        color: var(--fonte);
        border: none;

        :hover {
            filter: brightness(.9)
        }

        img {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            margin-right: .3rem;
        }

        p {
            font-weight: 600;
            font-size: 1rem;
        }
    }
`;