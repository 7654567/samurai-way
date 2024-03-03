import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

// type MyPostsPropsType = {
// 	posts: ProfilePageType
// 	onPostChange: Function
// 	addPost: Function
//
// }
export const MyPosts = (props: any) => {
	const textArea: React.RefObject<any> = React.createRef()

//TODO React.RefObject<any>

	function addPost() {
		props.addPost()
	}

	//
	function onPostChange(e: any) {
		const text = e.currentTarget.value
		props.onPostChange(text)
	}


	return (
		<div className={s.content}>
			<p>my posts</p>
			<form action={'#'} noValidate>
				<textarea ref={textArea} onChange={onPostChange} value={props.state.newPostText}></textarea>
				<button onClick={addPost}>Add</button>
			</form>

			{props.state.posts.map((p: any) => <Post post={p} key={p.id}/>)}
		</div>
	);
};
