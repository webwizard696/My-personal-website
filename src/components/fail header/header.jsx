import './header.css';
import Sun from '../../assets/gifs/sun.png';
import Moon from '../../assets/gifs/moon.png'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Us, Fr, Jp, Ir, Es, De, Sa, Tr, Cn, Ru, It, Kr, In } from 'react-flag-icons';
import { FaTelegram, FaInstagram, FaXing, FaGithub, FaBars } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoGmail, BiLogoUpwork } from 'react-icons/bi';
import { SiPeerlist, SiWellfound } from "react-icons/si";
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Header() {
    const [isRight, setRight] = useState(false);
    const [isImg, setImg] = useState(Sun);
    const [isOpen, menoOpen] = useState(false);
    const [inSide, outSide] = useState(false);
    const [inSideFlags, outSideFlags] = useState(false);
    const { t, changeLanguage } = useLanguage();

    useEffect(() => {
        if (isImg === Moon) {
            document.body.className = 'dark';
        } else {
            document.body.className = 'light';
        }
    }, [isImg]);

    const click = () => {
        setRight(!isRight);
        if (isImg === Sun) {
            setImg(Moon);
        } else {
            setImg(Sun);
        }
    };

    const answerMeno = () => {
        menoOpen(!isOpen);
    };

    const answerChange = () => {
        outSide(!inSide);
    };

    const Langs = () => {
        outSideFlags(!inSideFlags);
    };

    const selectLanguage = (lang) => {
        changeLanguage(lang);
        outSideFlags(false);
    };

    return(
        <header>
            <div className='nightMorning' onClick={click}>
                <img src={isImg} className={isRight ? 'moveImgX' : 'moveImgY'} alt="change photo" />
            </div>
            <strong>{t('webWizard')}</strong>

            <div className='menoAndTranslater'>
                <FaBars className='iconRightHeaderMeno' onClick={answerMeno} />
            </div>

            <div className={`moveMeno ${isOpen ? 'open' : ''}`}>

                <button className='dropItem' onClick={Langs}>
                    {t('bottomHambergerChangeLanguage')} {inSideFlags ? <IoIosArrowDown size={14} /> : <IoIosArrowUp size={14} />}
                </button>
                <div className={`styleContactUs ${inSideFlags ? 'styleContactUs1' : ''}`}>
                    <ul className='styleSS'>
                        <li onClick={() => selectLanguage('EN')}><Us className='icon' size={28} /><span>English</span></li>
                        <li onClick={() => selectLanguage('FR')}><Fr className='icon' size={28} /><span>Français</span></li>
                        <li onClick={() => selectLanguage('ES')}><Es className='icon' size={28} /><span>Español</span></li>
                        <li onClick={() => selectLanguage('DE')}><De className='icon' size={28} /><span>Deutsch</span></li>
                        <li onClick={() => selectLanguage('IT')}><It className='icon' size={28} /><span>Italiano</span></li>
                        <li onClick={() => selectLanguage('TR')}><Tr className='icon' size={28} /><span>Türkçe</span></li>
                        <li onClick={() => selectLanguage('RU')}><Ru className='icon' size={28} /><span>Русский</span></li>
                        <li onClick={() => selectLanguage('AR')}><Sa className='icon' size={28} /><span>العربية</span></li>
                        <li onClick={() => selectLanguage('FA')}><Ir className='icon' size={28} /><span>فارسی</span></li>
                        <li onClick={() => selectLanguage('HI')}><In className='icon' size={28} /><span>हिन्दी</span></li>
                        <li onClick={() => selectLanguage('JA')}><Jp className='icon' size={28} /><span>日本語</span></li>
                        <li onClick={() => selectLanguage('KO')}><Kr className='icon' size={28} /><span>한국어</span></li>
                        <li onClick={() => selectLanguage('ZH')}><Cn className='icon' size={28} /><span>中文</span></li>
                    </ul>
                </div>

                <button className='dropItem' onClick={answerChange}>
                    {t('bottomHambergerContactUs')} {inSide ? <IoIosArrowDown size={14} /> : <IoIosArrowUp size={14} />}
                </button>
                <div className={`styleContactUs ${inSide ? 'styleContactUs1' : ''}`}>
                    <ul className='styleSS'>
                        <li><FaTelegram className='icon' size={28} /><span>Telegram</span></li>
                        <li><BiLogoGmail className='icon' size={28} /><span>Email</span></li>
                        <li><FaGithub className='icon' size={28} /><span>Github</span></li>
                        <li><FaXing className='icon' size={28} /><span>XING</span></li>
                        <li><FaInstagram className='icon' size={28} /><span>Instagram</span></li>
                        <li><FaXTwitter className='icon' size={28} /><span>X</span></li>
                        <li><SiPeerlist className='icon' size={28} /><span>Peerlist</span></li>
                        <li><BiLogoUpwork className='icon' size={28} /><span>Upwork</span></li>
                        <li><SiWellfound className='icon' size={28} /><span>Wellfound jobs</span></li>
                    </ul>
                </div>

                <button className='support'>{t('contactMe')}</button>

            </div>

            {isOpen && <div className='overlay' onClick={answerMeno}></div>}
        </header>
    );
}

export default Header;