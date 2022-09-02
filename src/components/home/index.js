import React, { useEffect } from 'react';
import './style.scss'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'

const Home = () => {
    document.title = "Nguyen Phu Qui's portfolio"
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <div className='home'>
                <div className='bg' />
                <div className='img'>
                    <div className='img-bg' />
                    <div className='img-link' style={{backgroundImage: "url(" + avatar + ")"}}/>
                </div>
                <div className='info'>
                    <div className='info-wrap'>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1
                            }}
                        >
                            <h1>I'm qnp
                                <span>Fullstack developer !</span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: .5,
                                duration: 1
                            }}
                        >
                            <p>
                            Apply existing knowledge, improve, accumulate more experience to improve my work.
                            </p>
                        </motion.div>
                        <div className='info-button'>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 1,
                                    duration: 1
                                }}
                            >
                                <Link to='/projects'>
                                    <button>Projects</button>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 1
                                }}
                            >
                                <Link to='/about'>
                                    <button>About</button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;