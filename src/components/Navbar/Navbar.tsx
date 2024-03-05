import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
// import {NavbarType} from "../../redux/store";

export const Navbar = () => {
	const state = [
		{text: "Profiles", url: "/profile/2"},
		{text: "Messanges", url: "/dialog"},
		{text: "Users", url: "/users"},
		{text: "News", url: "/news"},
		{text: "Music", url: "/music"},
		{text: "Settings", url: "settings"},
	]
	// const state = props.store.getState().navbar.menuItems
	return (
		<nav className={s.nav}>
			<ul>
				{state.map((i: any, index) => {
					return (
						<li className={s.item} key={index}>
							<NavLink to={i.url} activeClassName={s.active}>{i.text}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	);
};

