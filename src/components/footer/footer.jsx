import './footerStyle.css';
import { useLanguage } from '../../context/LanguageContext';

function Footer() {
    const { t } = useLanguage();

    return(
        <footer className='footerStyle'>
            <p className='line2'>{t('line2Footer')}</p>
            <p className='line3'>&copy;2026 Mohammad Hasan |\/| <b>{t('webWizard')}</b></p>
        </footer>
    )
}

export default Footer;