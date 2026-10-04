import '../contactMe/contactMeStyle.css';
import { FaTelegram, FaInstagram, FaGithub} from 'react-icons/fa';
import { BiLogoGmail} from 'react-icons/bi';
import { useLanguage } from '../../context/LanguageContext';

function ContactMe() {
    const { t } = useLanguage();

    return(
        <div className='contactMe' id='ContactMe'>
            <div className='contactMeText'>
                <p>{t('contactMe')}✍️(◔◡◔)</p>
            </div>
            <div className='contactMeText'>
                <div className='line'>
                    <div className='iconsApp'>
                        <a href="https://github.com/webwizard696" target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='iconInContactMe' />
                        </a>
                    </div>
                    <div className='iconsApp'>
                        <a href="mailto:web.wizard.696@gmail.com" target='_blank' rel='noopener noreferrer'>
                            <BiLogoGmail className='iconInContactMe' />
                        </a>
                    </div>
                    <div className='iconsApp'>
                        <a href="https://t.me/Nrrrafj" target='_blank' rel='noopener noreferrer'>
                            <FaTelegram className='iconInContactMe' />
                        </a>
                    </div>
                </div>
                <div className='line'>
                    <div className='iconsApp'>
                        <a href="http://instagram.com/hamze1010100011" target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='iconInContactMe' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;