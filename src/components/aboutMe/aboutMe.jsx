import './aboutMeStyle.css';
import { useLanguage } from '../../context/LanguageContext';

function AboutMe() {
    const { t } = useLanguage();

    return(
        <div className='aboutme' id='tag0Scroll'>
            <div className='textAboutMe'>
                <div className='textNext'>
                    <p>{t('aboutMeLine1')}</p>
                    <p>{t('aboutMeLine2')}</p>
                    <p>{t('aboutMeLine3')}</p>
                    <p>{t('aboutMeLine4')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;