import './projectSytile.css';
import project1 from '../../assets/gifs/projectClock.png';
import project2 from '../../assets/gifs/projectCalculator.png';
import { useLanguage } from '../../context/LanguageContext';

function Project(){
    const { t } = useLanguage();

    return(
        <div className='fatherProjects' id='tagScroll'>
            <div className='lockationSpan'>
                <span>{t('textBottomLeft')}</span>
            </div>
            <div className='scrollBox'>
                <div className='box'>
                    <img src={project2} alt="wizard" className='styleProject' />
                    <h3>{t('titleProgect1')}</h3>
                    <p className='DescriptionPForUX'>{t('p1Progect')}</p>
                    <p className='TechnologiesDescriptionForUX'>{t('p2Progect')}</p>
                    <button className='buttonGoPageForMobile'>{t('bottomProgect')}</button>
                </div>
                <div className='box'>
                    <img src={project1} alt="wizard" className='styleProject' />
                    <h3>{t('titleProgect2')}</h3>
                    <p className='DescriptionPForDesctop'>{t('p1Progect2')}</p>
                    <p className='DescriptionTechnologiesForDesctop'>{t('p2Progect2')}</p>
                    <p className='whatIsIt'>{t('redText')}</p>
                    <button className='buttonGoPage'>{t('bottomProgect')}</button>
                </div>
            </div>
        </div>
    )
}

export default Project;