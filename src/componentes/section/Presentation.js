import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation() {
    return (
        <div id="Presentation" className={styles.presentation}>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou o Roberto Carlos!</h1>
            <p> Estou empenhado em ser um profissional de excelência <br/>
                como Desenvolvedor Front-end
            </p>
            <ButtonA link='https://github.com/robertoDCJ' text='Conecte-se comigo'/>
        </div>
    )
}

export default Presentation