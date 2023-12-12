import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";

// ReactDOM.render(
// 	<BrowserRouter>
// 		<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
// 	</BrowserRouter>
// 	,
// 	document.getElementById('root')
// );

const rerenderEntireTree = (state: RootStateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>
		,
		document.getElementById('root')
	);
}
subscribe(rerenderEntireTree)
rerenderEntireTree(state)