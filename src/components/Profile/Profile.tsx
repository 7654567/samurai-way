import React from 'react';
// import s from './Profile.module.css';;
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
// import {ProfilePageType} from "../../redux/store";

// type ProfilePropsType = {
// 	state: any
// 	dispatch: Function
// }

export const Profile = (props: any) => {
	return (
		<>
			<ProfileInfo/>
			<MyPostsContainer store={props.store}/>
		</>
	);
};

