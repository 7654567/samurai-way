import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>

            <p>my posts</p>
            <form action="#">
                <textarea name="newPost" id="newPost" cols="30" rows="10"></textarea>
                <button>Add</button>
            </form>
            <Post message="message1" />
            <Post message="message2" />
        </div>
    );
};

