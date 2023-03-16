import { useState } from 'react';
import brasil from '../../assets/icons/brasil.svg'
import espanha from '../../assets/icons/espanha.svg'
import eua from '../../assets/icons/eua.svg'
import { 
    Container,
    Tecnologias,
    Botoes
} from './styles'

function Home() {
    const langs = {
        portugues: 'Olá, meu nome é Felipe Maurente e eu sou desenvolvedor Front-end, Tecnologias que tenho experiência:',
        ingles: 'Hello, my name is Felipe Maurente and I am a Front-End developer, Technologies I have experience with:',
        espanhol: 'Hola, mi nombre es Felipe Maurente y soy desarrollador Front-End, Tecnologías que tengo experiencia:',
    }

    const [text, setText] = useState(langs.portugues);

    const techs = [
        'HTML',
        'CSS',
        'Java',
        'React',
        'JavaScript',
        'Angular',
        'Vue',
        'Sass',
        'Tailwind',
        'Typescript',
        'Styled-components'
    ]

    return(
        <Container>
            <h1>{text}</h1>

            <Tecnologias>
                <ul>
                    {
                        techs.map((e, i) => <li>{e}</li>)
                    }
                </ul>
            </Tecnologias>
            
            <Botoes>
                <button onClick={() => setText(langs.portugues)}>
                    <img src={brasil} alt="" />
                    <p>Português</p>
                </button>

                <button onClick={() => setText(langs.ingles)}>
                    <img src={eua} alt="" />
                    <p>Inglês</p>
                </button>

                <button onClick={() => setText(langs.espanhol)}>
                    <img src={espanha} alt="" />
                    <p>Espanhol</p>
                </button>
            </Botoes>
        </Container>
    );
}

export default Home;