import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import {RootStateType, store} from "./redux/state";

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
			<App state={store.getState()} addPost={store.addPost.bind(store)}
				 updateNewPostText={store.updateNewPostText.bind(store)}/>
		</BrowserRouter>
		,
		document.getElementById('root')
	);
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
