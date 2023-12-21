import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
// import {NavbarType} from "../../redux/store";

export const Navbar = (props: any) => {
	console.log("=>(Navbar.tsx:8) props.store.getState()", props.store.getState());
	const state = props.store.getState().navbar.menuItems
	return (
		<nav className={s.nav}>
			<ul>
				{state.map((i: any) => {
					return (
						<li className={s.item}>
							<NavLink to={i.url} activeClassName={s.active}>{i.text}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	);
};

