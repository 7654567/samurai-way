import s from "./Users.module.css";
import React from "react";

export const UsersUI = (props: any) => {
	return <>


		{
			props.users.map((u: any, i: number) => {
				const followHandler = () => props.follow(u.id)
				const unfollowHandler = () => props.unfollow(u.id)
				return <div key={i}>
					<div><img src={u.photos.small ? u.photos.small : "https://picsum.photos/id/237/50/50"}
					          alt="userPhoto" className={s.ava}/></div>
					<div>
						{
							u.followed
								? <button onClick={unfollowHandler}>Unfollow</button>
								: <button onClick={followHandler}>Follow</button>
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