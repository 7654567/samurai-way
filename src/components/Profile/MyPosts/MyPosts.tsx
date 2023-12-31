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

	console.log("=>(MyPosts.tsx:42) props", props);
	const textArea: React.RefObject<any> = React.createRef()

//TODO React.RefObject<any>

	function addPost() {
		props.addPost()
	}

	//
	function onPostChange() {
		const text = textArea.current.value
		props.onPostChange(text)
	}


	return (
		<div className={s.content}>
			<p>my posts</p>
			<form action={'#'} noValidate>
				<textarea ref={textArea} onChange={onPostChange} value={props.state.newPostText}></textarea>
				<button onClick={addPost}>Add</button>
			</form>

			{props.state.posts.map((p: any) => <Post post={p}/>)}
		</div>
	);
};
