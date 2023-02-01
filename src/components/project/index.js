import React, { useState } from 'react';
import './style.scss'
import data from './data.js'
import ProjectLib from './lib';
import { motion } from 'framer-motion';
import Header from '../Header';


const Project = () => {
    document.title = "Nguyen Phu Qui's project"
    const [currentTab, setCurrentTab] = useState(data.length + 1)
    const [modal, setModal] = useState(null)
    let timer = 0;

    const handleChangeTab = e => {
        setCurrentTab(e)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <div className='project'>
                <div className='bg' />
                <Header front1='my' front2='projects' back='works' />
                <div className='tab'>
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: .2,
                            duration: 1
                        }}
                    >
                        <ul>
                            {data.map(e => (
                                <li
                                    key={e.id}
                                    onClick={() => handleChangeTab(e.id)}
                                    className={currentTab === e.id ? 'active' : ''}
                                >
                                    <span>{e.name} </span>
                                    <span className='count'>{e.projects.length}</span>
                                </li>
                            ))}
                            <li
                                key={data.length + 1}
                                onClick={() => handleChangeTab(data.length + 1)}
                                className={currentTab === data.length + 1 ? 'active' : ''}
                            >
                                <span>all </span>
                                <span className='count'>{data.reduce((total, x) => total+=x.projects.length, 0)}</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div className='projects'>
                    {currentTab <= data.length
                        ? (data[currentTab - 1].projects).map((e, i) => (
                            <div className='project-wrap'
                                key={i}
                                onClick={() => setModal(e)}
                            >
                                <motion.div
                                    key={currentTab}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: timer,
                                        duration: 1
                                    }}
                                >
                                    <div className='img'>
                                        <img src={e.img[0]} alt={e.name} />
                                    </div>
                                    <div className='bg-hover' />
                                    <div className='name'>
                                        {e.name}
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        {timer += 0.1}
                                    </div>
                                </motion.div>
                            </div>
                        ))
                        : data.map((e, i) => e.projects.map((ele, id) => (

                            <div className='project-wrap'
                                key={id}
                                onClick={() => setModal(ele)}
                            >
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: timer,
                                        duration: 1
                                    }}
                                >
                                    <div className='img'>
                                        <img src={ele.img[0]} alt={ele.name} />
                                    </div>
                                    <div className='bg-hover' />
                                    <div className='name'>
                                        {ele.name}
                                    </div>
                                    <div style={{ display: 'none' }}>
                                        {timer += 0.1}
                                    </div>
                                </motion.div>
                            </div>
                        )))
                    }
                </div>
            </div>

            {modal && (
                <div className={modal ? 'modal modal-active' : 'modal'}>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <div className='content'>
                            <div className='wrab'>
                                <div className='detail'>
                                    <h3 className='title'>
                                        {modal.name}
                                    </h3>
                                    <div className='lib'>
                                        <ProjectLib data={modal.img} />
                                    </div>
                                </div>
                                <div className='detail'>
                                    <h3 className='title'>
                                        Detail
                                    </h3>
                                    <div className='info'>
                                        <p className='info-detail'>
                                            {modal.detail}
                                        </p>
                                        <p>
                                            <span>Created - </span>
                                            <span>{modal.created}</span>
                                        </p>
                                        <p>
                                            <span>Role - </span>
                                            <span>{modal.role}</span>
                                        </p>
                                        <p>
                                            <span>Frontend - </span>
                                            <span>{modal.frontend}</span>
                                        </p>
                                        <p>
                                            <span>Backend - </span>
                                            <span>{modal.backend}</span>
                                        </p>
                                        {modal.architect && (
                                            <p>
                                            <span>Solution architect - </span>
                                            <span>{modal.architect}</span>
                                        </p>
                                        )}
                                        {modal.github && (
                                            <p>
                                                <span>Github - </span>
                                                <a href={modal.github} className='link-demo' target='_blank' rel='noopener noreferrer'>{modal.github}</a>
                                            </p>
                                        )}
                                        {modal.demo && (
                                            <p>
                                                <span>Demo - </span>
                                                <a href={modal.demo} className='link-demo' target='_blank' rel='noopener noreferrer'>{modal.demo}</a>
                                            </p>
                                        )}

                                        {modal?.demoAuth && (
                                            <p>
                                                <span>Demo auth - </span>
                                                <spanz className='auth'>{modal.demoAuth}</spanz>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='close' onClick={() => setModal(null)}>
                                <i className='bx bx-x' />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

        </>
    );
};

export default Project;