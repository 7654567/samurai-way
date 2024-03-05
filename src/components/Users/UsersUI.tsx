import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export const UsersUI = (props: any) => {
	// if ()
	return <>
		{
			props.users.map((u: any, i: number) => {
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
								? <button onClick={unfollowHandler}
								          disabled={u.id === props.followingInProgress}>Unfollow</button>
								: <button onClick={followHandler}
								          disabled={u.id === props.followingInProgress}>Follow</button>
						}
					</div>
					<div>{u.name}</div>
				</div>
			})
		}
	</>
}
