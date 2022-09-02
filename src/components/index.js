import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

const Static = () => {
    const location = useLocation()
    const [theme, setTheme] = useState(document.body.className)
    const handleTheme = () => {
        if (theme === 'light-theme') {
            document.body.className = 'dark-theme'
            setTheme('dark-theme')
        } else {
            document.body.className = 'light-theme'
            setTheme('light-theme')
        }
    }
    return (
        <>
            <motion.div
                key={location.key}
                initial="initial"
                animate="in"
                variants={{
                    initial: {
                        opacity: 0
                    },
                    in: {
                        opacity: 1
                    },
                    out: {
                        opacity: 0
                    }
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0.5
                }}
            >
                <div className='static'>
                    <Outlet />
                </div>
            </motion.div>
            <div className='toggle-theme'>
                <button onClick={handleTheme}>
                    {(theme === 'light-theme')
                        ? <i className='bx bxs-moon' />
                        : <i className='bx bx-sun' />
                    }

                </button>
            </div>
            <div className='nav'>
                <div className='bg-mobile'/>
                <NavLink
                    to='/'
                    activeclassname='active'
                    className='nav-item'>
                    <i className='bx bxs-home' ></i>
                    <div className='name'>
                        Home
                    </div>
                </NavLink>
                <NavLink
                    to='/projects'
                    activeclassname='active'
                    className='nav-item'>
                    <i className='bx bxs-briefcase' ></i>
                    <div className='name'>
                        Project
                    </div>
                </NavLink>
                <NavLink
                    to='/about'
                    activeclassname='active'
                    className='nav-item'>
                    <i className='bx bxs-user' ></i>
                    <div className='name'>
                        About
                    </div>
                </NavLink>
                <NavLink
                    to='/contact'
                    activeclassname='active'
                    className='nav-item'>
                    <i className='bx bxs-envelope-open' ></i>
                    <div className='name'>
                        Contact
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Static;