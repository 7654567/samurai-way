import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="#">Profiles</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Messanges</a></li>
                <li className={s.item}><a href="#">Music</a></li>
                <li className={s.item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
};

