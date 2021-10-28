import React from 'react';

import Avatar from './images/avatar.jpg';

import './About.css'

export default function About() {
    return (
        <section className='about-container container'>
            <h1 className='page-header'>About</h1>
            <div className='divider z-depth-1'></div>
            <div className='section'>
                <img src={Avatar} alt='avatar' className='circle' width='200px'/>

                <div className='about-content-container'>
                    <p className="left-align">
                        Hello, I'm Robert!
                        <br/><br/>
                        I'm a full-stack web developer who utilizes my applied physics and avionics background to implement agile solutions to complex problems.
                        <br/><br/>
                        I'm an adaptive and communicative team member that emphasizes efficient and readable code. I’m eager to contribute my skills to a collaborative environment where I can further develop acquired skills as well as learn new ones!
                    </p>
                </div>
            </div>
        </section>
    );
}
