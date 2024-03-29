import React from 'react';
// import s from './MyPosts.module.css';
// import {Post} from "./Post/Post";
// import {ProfilePageType,} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addMessangeActionCreator, updateNewMessangeTextActionCreator} from "../../../redux/dialogs-reducer";

// type MyPostsPropsType = {
// 	posts: ProfilePageType
// 	dispatch: Function
// }
// export const MyPostsContainer = (props: any) => {
// 	const state = props.store.getState().profilePage
// 	console.log("=>(MyPostsContainer.tsx:14) state", state);
//
// //TODO React.RefObject<any>
// 	function addPost() {
// 		props.store.dispatch(addPostActionCreator())
// 	}
//
// 	function onPostChange(text: string) {
// 		props.store.dispatch(updateNewPostTextActionCreator(text))
// 	}
//
//
// 	return (
// 		<MyPosts state={state} addPost={addPost} onPostChange={onPostChange}/>
// 	);
// };
const mapStateToProps = (state: any) => ({state: state.profilePage})
const mapDispachToProps = (dispatch: any) => ({
	addPost: () => dispatch(addPostActionCreator()),
	onPostChange: (text: any) => dispatch(updateNewPostTextActionCreator(text))
})

export const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts)
