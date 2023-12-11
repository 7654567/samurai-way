import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={`${s.item} ${s.active}`}>
					<NavLink to="/profile" activeClassName={s.active}>Profiles</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" activeClassName={s.active}>News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialog" activeClassName={s.active}>Messanges</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" activeClassName={s.active}>Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" activeClassName={s.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
};

