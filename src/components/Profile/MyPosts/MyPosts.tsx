import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType,} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ profile-reducer";

type MyPostsPropsType = {
	posts: ProfilePageType
	dispatch: Function
}
export const MyPosts = (props: MyPostsPropsType) => {

	const textArea: React.RefObject<any> = React.createRef()

//TODO React.RefObject<any>
	function addPost() {
		props.dispatch(addPostActionCreator())
	}

	function onPostChange() {
		const text = textArea.current.value
		console.log("=>(MyPosts.tsx:23) text", text);
		props.dispatch(updateNewPostTextActionCreator(text))
	}


	return (
		<div className={s.content}>
			<p>my posts</p>
			<form action="#">
				<textarea ref={textArea} onChange={onPostChange} value={props.posts.newPostText}></textarea>
				<button onClick={addPost}>Add</button>
			</form>

			{props.posts.posts.map(p => <Post post={p}/>)}
		</div>
	);
};

