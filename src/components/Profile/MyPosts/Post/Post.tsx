import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";

type PostPropsType = {
	post: PostType
}
export const Post = (props: PostPropsType) => {
	return (
		<div className={s.post}>
			<img
				src={props.post.avaUrl}
				alt="avatar"/>
			<p>{props.post.text}</p>
		</div>
	);
};
