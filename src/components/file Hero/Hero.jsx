import './Hero.css';
import ME from '../../assets/gifs/ME.jpg'


function Hero() {

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
                    <strong className='colorText'>WEB</strong><strong>DESIGNER</strong>
                </div>
                <div className='profile'>
                    <img src={ME} alt="" srcset="" className='ME' />
                </div>
            </div>
            <div className='text'>
                <p>Hi! I'm Web Wizard, a front-end developer with a love for coding.</p>
                <p>Join me to build your ideas.</p>
            </div>
            <div className='boxButtom'>
                <button className='btnNext' onClick={scrollBottom}>Project</button>
                <button className='btnBetwen' onClick={scrollContactMe}>Contact us</button>
                <button className='btnNext' onClick={scrollBottomLevel0}>About me</button>
            </div>
        </div>
    )
}


export default Hero;