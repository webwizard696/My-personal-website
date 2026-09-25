import './projectSytile.css';
import project1 from '../../assets/gifs/projectClock.png';
import project2 from '../../assets/gifs/projectCalculator.png'


function Project(){
    return(
        <div className='fatherProjects'   id='tagScroll'>
            <div className='lockationSpan'>
                <span>Projects</span>
            </div>
            <div className='scrollBox'>
                <div className='box'>
                    <img src={project2} alt="wizard" className='styleProject' />
                    <h3>Calculator</h3>
                    <p className='DescriptionPForUX'>A calculator with a glass-like background and small, moving cubes.</p>
                    <p className='TechnologiesDescriptionForUX'>Technologies Used : Html , CSS , JavaScript</p>
                    <button className='buttonGoPageForMobile'>View</button>
                </div>
                <div className='box'>
                    <img src={project1} alt="wizard" className='styleProject' />
                    <h3>Digital Clock</h3>
                    <p className='DescriptionPForDesctop'>A beautiful digital clock with a glass background.</p>
                    <p className='DescriptionTechnologiesForDesctop'>Technologies Used : Html , CSS , JavaScript</p>
                    <p className='whatIsIt'>For desktop users</p>
                    <button className='buttonGoPage'>View</button>
                </div>
            </div>
        </div>
    )
}


export default Project;