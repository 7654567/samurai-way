import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const UsersUI = (props: any) => {

	return <>


		{
			props.users.map((u: any, i: number) => {
				console.log("=>(UsersUI.tsx:55) u", u);
				const followHandler = () => props.follow(u.id)
				const unfollowHandler = () => props.unfollow(u.id)
				return <div key={i}>
					<div>
						<NavLink to={"/profile/" + u.id}>
							<img
								src={u.photos.small ? u.photos.small : "https://picsum.photos/id/237/50/50"}
								alt="userPhoto" className={s.ava}/>
						</NavLink>
					</div>
					<div>
						{
							u.followed
								? <button onClick={() => {
									props.toggleFollowingInProgress(u.id)
									axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
										withCredentials: true,
										headers: {
											"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
										}
									}).then(response => {
										props.toggleFollowingInProgress(null)
										if (response.data.resultCode === 0) unfollowHandler()
									})
								}} disabled={u.id === props.followingInProgress}>Unfollow</button>
								: <button onClick={() => {
									props.toggleFollowingInProgress(u.id)
									axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {}, {
										withCredentials: true,
										headers: {
											"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
										}
									}).then(response => {
										props.toggleFollowingInProgress(null)
										if (response.data.resultCode === 0) followHandler()
									})
								}} disabled={u.id === props.followingInProgress}>Follow</button>
						}
					</div>
					<div>{u.name}</div>
					{/*<div>{u.location.country}</div>*/}
					{/*<div>{u.location.city}</div>*/}
				</div>
			})
		}
	</>
}
