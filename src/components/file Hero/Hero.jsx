import './Hero.css';
import ME from '../../assets/gifs/ME.jpg';
import { useLanguage } from '../../context/LanguageContext';

function Hero() {
    const { t } = useLanguage();

    const scrollBottom = () => {
        const tag = document.getElementById('tagScroll');
        tag?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollContactMe = () => {
        const tagContactMe = document.getElementById('ContactMe');
        tagContactMe?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollBottomLevel0 = () => {
        const tagAboutMe = document.getElementById('tag0Scroll');
        tagAboutMe?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="heroDad">
            <div className='consProfileAndMyJob'>
                <div className='nameMyJob'>
                    <strong className='colorText'>{t('web')}</strong>
                    <strong>{t('designer')}</strong>
                </div>
                <div className='profile'>
                    <img src={ME} alt="" className='ME' />
                </div>
            </div>
            <div className='text'>
                <p>{t('textHero1')}</p>
                <p>{t('textHero2')}</p>
            </div>
            <div className='boxButtom'>
                <button className='btnNext' onClick={scrollBottom}>
                    {t('textBottomLeft')}
                </button>
                <button className='btnBetwen' onClick={scrollContactMe}>
                    {t('textBottomcCenter')}
                </button>
                <button className='btnNext' onClick={scrollBottomLevel0}>
                    {t('textBottomReight')}
                </button>
            </div>
        </div>
    )
}

export default Hero;