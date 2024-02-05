import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {

	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>

		</BrowserRouter>
		,
		document.getElementById('root')
	);
}
rerenderEntireTree()
// store.subscribe(rerenderEntireTree)
