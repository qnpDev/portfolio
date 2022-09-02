import React, { useEffect } from 'react';
import './style.scss'
import AOS from "aos"
import Header from '../Header';

const Contact = () => {
    document.title = "Nguyen Phu Qui's contact"

    const handleSubmit = e => {
        e.preventDefault()
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className='contact'>
                <div className='bg' />
                <Header front1='get in' front2='touch' back='contact' />
                <div className='wrap'>
                    <div className='info'>
                        <div data-aos='fade-up'>
                            <h2>don't be shy !</h2>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <div className='detail'>
                                <div className='icon'>
                                    <i className='bx bxs-map' />
                                </div>
                                <div className='name'>
                                    address
                                </div>
                                <div className='content'>
                                    Tan Hung Ward, District 7, HCM
                                </div>
                            </div>
                            <div className='detail'>
                                <div className='icon'>
                                    <i className='bx bxl-gmail' />
                                </div>
                                <div className='name'>
                                    email
                                </div>
                                <div className='content'>
                                    <a href='mailto:qnpdev@gmail.com'>qnpdev@gmail.com</a>
                                </div>
                            </div>
                            <div className='detail'>
                                <div className='icon'>
                                    <i className='bx bxs-phone-call' />
                                </div>
                                <div className='name'>
                                    phone
                                </div>
                                <div className='content'>
                                    <a href='tel:0822226618'>0822226618</a>
                                </div>
                            </div>
                            <div className='detail'>
                                <div className='icon'>
                                    <i className='bx bxl-facebook-circle' />
                                </div>
                                <div className='name'>
                                    facebook
                                </div>
                                <div className='content'>
                                    <a href='https://www.facebook.com/NPQuii/'>fb.com/NPQuii</a>
                                </div>
                            </div>
                            <div className='detail'>
                                <div className='icon'>
                                    <i className='bx bxl-github' />
                                </div>
                                <div className='name'>
                                    github
                                </div>
                                <div className='content'>
                                    <a href='https://github.com/qnpDev'>github.com/qnpDev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mail'>
                        <div data-aos='fade-up'>
                            <form onSubmit={handleSubmit}>
                                <div className='name-email'>
                                    <input type='text' placeholder='Your name' required />
                                    <input type='email' placeholder='Your email' required />
                                </div>
                                <div className='subject'>
                                    <input type='text' placeholder='Subject' required />
                                </div>
                                <div className='message'>
                                    <textarea placeholder='Message' />
                                </div>
                                <div className='button'>
                                    <button type='submit'>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;