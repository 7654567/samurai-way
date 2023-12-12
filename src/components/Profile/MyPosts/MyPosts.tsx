import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
	posts: Array<PostType>
	addPost: Function
}
export const MyPosts = (props: MyPostsPropsType) => {
	// const posts = [
	// 	{
	// 		id: 1,
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore nemo qui repellat repellendus sequi sint. Architecto fugiat qui totam!",
	// 		avaUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg"
	// 	},
	// 	{
	// 		id: 2,
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eveniet fuga nemo quo unde! Beatae deleniti dolor eaque natus nihil?",
	// 		avaUrl: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
	// 	},
	// 	{
	// 		id: 3,
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate distinctio doloribus iusto molestias pariatur praesentium, quia quod sed similique!",
	// 		avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJaDn7Vmy8w0uaXt5Zma1tWcPZfXpvSA8Kd8B-qILghPJLnrEFnshHFmsZqv3mjIrYVw&usqp=CAU"
	// 	},
	// 	{
	// 		id: 4,
	// 		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consectetur magni nam nobis odit placeat quos. Commodi, est, officiis.",
	// 		avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
	// 	},
	//
	// ]
	const textArea: React.RefObject<any> = React.createRef()

//TODO React.RefObject<any>
	function addPost() {
		const text = textArea.current.value
		alert(text)
	}


	return (
		<div className={s.content}>
			<p>my posts</p>
			<form action="#">
				<textarea ref={textArea}></textarea>
				<button onClick={addPost}>Add</button>
			</form>

			{props.posts.map(p => <Post post={p}/>)}
		</div>
	);
};

