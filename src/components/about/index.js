import React, { useEffect } from 'react';
import AOS from "aos"
import './style.scss'
import { personal, experience, skills, education} from './data.js'
import Header from '../Header';

const About = () => {

    document.title = "Nguyen Phu Qui's about"

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='about'>
                <Header front1='about' front2='me' back='resume' />
                <div className='info'>
                    <div className='left'>
                        <div data-aos='fade-up'>
                            <h3>personal infos</h3>
                            <ul>
                                {personal.map((e, i) => (
                                    <li key={i}>
                                        <span>{e.key}: </span>
                                        <span>{e.value}</span>
                                    </li>
                                ))}
                            </ul>
                            <button>
                                <i className='bx bxs-download' ></i>
                                <span>Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div className='right'>
                        <div data-aos='fade-up'>
                            <div className='wrap'>
                                {experience.map((e, i) => (
                                    <div className='card' key={i}>
                                        <h3>
                                            {e.number}
                                            <i className='bx bx-plus bx-rotate-90' />
                                        </h3>
                                        <p>
                                            {e.value}
                                        </p>
                                        <div className='bg' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <h3>my skills</h3>
                    <div className='wrap'>
                        {skills.map((e, i) => (
                            <div data-aos='fade-up' className='item' key={i}>
                                <div className='img'>
                                    {/* <img src={e.img} alt={e.name} /> */}
                                    <div style={{backgroundImage: "url(" + e.img + ")"}} />
                                </div>
                                <div className='name'>
                                    {e.name}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='education'>
                    <h3>education & experience</h3>
                    <div className='wrap'>
                        {education.map((e, i) => (
                            <div data-aos='fade-up' className='item' key={i}>

                                    <div className='icon'>
                                        <i className={'bx ' + e.bxicon} />
                                    </div>
                                    <div className='period'>
                                        {e.period}
                                    </div>
                                    <div className='name'>
                                        <span>{e.name}</span>
                                        <span> - </span>
                                        <span>{e.role}</span>
                                    </div>
                                    <div className='detail'>
                                        {e.detail}
                                    </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;