import React from 'react';
import axios from "axios";
import s from "./Users.module.css";


export const Users = (props: any) => {
	console.log("=>(Users.tsx:11) props", props);
	const getUsers = () => {
		if (props.state.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
				props.addUsers(response.data.items)
			})

			// props.addUsers()
		}
	}
	// if (props.state.length === 0) {
	// 	axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
	// 		props.addUsers(response.data.items)
	// 	})
	//
	// 	// props.addUsers()
	// }
	return (
		<>
			<button onClick={getUsers}>Get users</button>
			{
				props.state.map((u: any) => {
					const followHandler = () => props.follow(u.id)
					const unfollowHandler = () => props.unfollow(u.id)
					return <div key={u.id}>
						<div><img src={u.photos.small ? u.photos.small : "https://picsum.photos/id/237/50/50"}
						          alt="userPhoto" className={s.ava}/></div>
						<div>
							{
								u.followed
									? <button onClick={() => {
										axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
											withCredentials: true,
											headers: {
												"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
											}
										}).then(response => {
											if (response.data.resultCode === 0) unfollowHandler()
										})
									}}>Unfollowertyeryer</button>
									: <button onClick={() => {
										axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
											withCredentials: true,
											headers: {
												"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
											}
										}).then(response => {
											if (response.data.resultCode === 0) followHandler()
										})
									}}>Follow</button>
							}
						</div>
						<div>{u.name}</div>
						{/*<div>{u.location.country}</div>*/}
						{/*<div>{u.location.city}</div>*/}
					</div>
				})
			}
		</>
	);
};
