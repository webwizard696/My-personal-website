import '../contactMe/contactMeStyle.css';
import { FaTelegram, FaInstagram, FaGithub, FaXing, } from 'react-icons/fa';
import { BiLogoGmail, BiLogoUpwork } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiPeerlist, SiWellfound  } from "react-icons/si";

function ContactMe() {
    return(
    <div className='contactMe' id='ContactMe'>
        <div className='contactMeText'>
            <p>For collaboration or questions, contact me✍️(◔◡◔)</p>
        </div>
        <div className='contactMeText'>
            <div className='line'>
                <div className='iconsApp'>
                    <FaGithub className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <BiLogoGmail className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <FaTelegram className='iconInContactMe' />
                </div>
            </div>
            <div className='line'>
                <div className='iconsApp'>
                    <BiLogoUpwork className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <FaInstagram className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <FaXTwitter className='iconInContactMe' />
                </div>
            </div>
            <div className='line'>
                <div className='iconsApp'>
                    <SiWellfound className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <FaXing className='iconInContactMe' />
                </div>
                <div className='iconsApp'>
                    <SiPeerlist className='iconInContactMe' />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactMe;