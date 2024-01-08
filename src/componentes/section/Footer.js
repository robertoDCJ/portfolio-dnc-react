import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/robertinhodc' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/robertoDCJ' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/roberto-carlos-dal-col/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>robertox70@hotmail.com</p>
            <p>Roberto Carlos Dal Col ©️ 2024</p>
        </div>
    )
}

export default Footer