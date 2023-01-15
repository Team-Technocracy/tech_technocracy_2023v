import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

// import '../component/Card.css';
import '../coordinators/Card.css';


function Card(props) {
// console.log(props.domain);
    const [aniToggle,setAniToggle] = useState(false);
    const [downAni, setDownAni] = useState(false);
    const [socialClassName,setSocialClassName] = useState('card--social');

    const toggleAnimationClass = ()=>{
        aniToggle ? setSocialClassName(socialClassName.replace(" animation",""))  : setSocialClassName(socialClassName.concat(" animation"))
    }
    const handleToggle = () => {
        if(aniToggle){
            setDownAni(true)

            setTimeout(()=>{
                setDownAni(false)
            },1000)
        }
        toggleAnimationClass()
        setAniToggle(!aniToggle)
    }

    var overAllC = false;
    if(props.id === '1' || props.id==='2' || props.id==='3'){
        overAllC=true;
    }
  return (
    <>
        <div className='container'>
        <div data-aos="fade-up">
            <div className='card'>
                <div className='card--border'>
                    <img className="card--img" src={props.img} alt="Technocracy Team"></img>
                </div>
                <h3 className={`card--name ${overAllC ? `overAllC` : ``}`}>{props.name}</h3>
                <h4 className='domain_name'>{props.domain}</h4>
                <div className={`${socialClassName} ${downAni? "down-animation":""}`} id='card-social' onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
                    <div className='card--social-control'>
                        <div className='card--social-toggle' id='card-toggle' >
                            <AddIcon style={{fontSize:"1.5rem"}}/>
                        </div>

                    <span className='card--social-text'>Reach Me</span>
                    <ul className='card--social-list'>
                        {props.linkedin !== '#' && <a href={props.linkedin} className="card--social-link linkedin">
                            <LinkedInIcon/>
                        </a>}

                        {props.github !== '#' && <a href={props.github} className="card--social-link github">
                            <GitHubIcon/>
                        </a>}

                        {props.facebook !== '#' && <a href={props.facebook} className="card--social-link facebook">
                            <FacebookIcon/>
                        </a>}

                        {props.insta !== '#' && <a href={props.insta} className="card--social-link instagram">
                            <InstagramIcon/>
                        </a>}
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Card;