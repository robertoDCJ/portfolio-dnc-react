import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import { useState, useEffect } from 'react';

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Roberto Carlos!', 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeliting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect( () => { 
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeliting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeliting(false);
            setDelta(200);
            setLoop(loop + 1)
        }
    }

    return (
        <div id="Presentation" className={styles.presentation}>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou {text}</h1>
            <p> Estou empenhado em ser um profissional de excelência <br/>
                como Desenvolvedor Front-end
            </p>
            <ButtonA link='https://github.com/robertoDCJ' text='Conecte-se comigo'/>
        </div>
    )
}

export default Presentation