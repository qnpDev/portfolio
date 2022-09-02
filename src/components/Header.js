import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ front1, front2, back}) => {
    return (
        <>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 1, opacity: 1 }}
                transition={{
                    delay: .2,
                    duration: 1
                }}
            >
                <div className='header'>
                    <h1>
                        <span>{front1} </span>
                        <span>{front2}</span>
                    </h1>
                    <span>{back}</span>
                </div>
            </motion.div>
        </>
    );
};

export default Header;