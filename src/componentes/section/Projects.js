import ButtonB from '../elements/ButtonB';
import styles from './Projects.module.css';
import Card from '../elements/Card';
import muitomais from '../../Image/projects/site-muitomaismotel.png';
import studyapi from '../../Image/projects/site-study-api.png';

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={muitomais}
            title="Site Muito Mais Motel"
            tech=" HTML, CSS, JS"
            description="Desenvolvimento de uma Landing Page, para a apresentação dos serviços e da estrutura de um motel para os seus clientes."
            repo="https://github.com/robertoDCJ/site-muitomaismotel"
            site="https://muitomais.netlify.app/"
            />
            <Card
            img={studyapi}
            title="Portfolio React"
            tech=" HTML, CSS, JS"
            description="Projeto criado para estudo sobre o consumo de APIs, esse projeto foi integrado a duas APIs, uma que busca o endereço pelo CEP, e a outra busca a previsão do tempo com base na latitude e longitude passada nos campos de busca."
            repo="https://github.com/robertoDCJ/study-api"
            site="https://study-api-two.vercel.app/"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/robertoDCJ?tab=repositories' />
        </div>
    )
}

export default Projects