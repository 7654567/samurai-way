import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavbarType} from "../../redux/store";

export const Navbar = (props: NavbarType) => {
	return (
		<nav className={s.nav}>
			<ul>
				{props.menuItems.map(i => {
					return (
						<li className={s.item}>
							<NavLink to={i.url} activeClassName={s.active}>{i.text}</NavLink>
						</li>
					)
				})}

				{/*<li className={`${s.item} ${s.active}`}>*/}
				{/*	<NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>*/}
				{/*</li>*/}
			</ul>
		</nav>
	);
};

