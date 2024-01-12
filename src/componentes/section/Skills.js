import styles from './Skills.module.css';
import javascript from '../../Image/skills/javascript.svg';
import html from '../../Image/skills/html.svg';
import css from '../../Image/skills/css.svg';
import react from '../../Image/skills/react.svg';
import Tooltip from '../elements/Tooltip';

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                
                <div className={styles.js}>
                    <img src={javascript} alt='ERROR'/>
                    <Tooltip text='JavaScript'/>
                </div>
                <div className={styles.js}>
                    <img src={html} alt='ERROR'/>
                    <Tooltip text='HTML'/>
                </div>
                <div className={styles.js}>
                    <img src={css} alt='ERROR'/>
                    <Tooltip text='CSS'/>
                </div>
                <div className={styles.js}>
                    <img src={react} alt='ERROR'/>
                    <Tooltip text='React.js'/>
                </div>
            </div>
        </div>
    )
}

export default Skills