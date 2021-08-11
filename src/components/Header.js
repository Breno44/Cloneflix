/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css'
import NetflixImg from '../Assets/img/netflix-logo.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={NetflixImg} />
                </a>
            </div>
        </header>
    );
}