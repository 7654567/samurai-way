import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
// import {RootStateType} from "./redux/store";

// type AppPropsTypes = {
// 	state: RootStateType
// 	dispatch: Function
// }

function App(props: any) {

	return (
		<div className="App">
			<Header/>
			<Navbar store={props.store}/>
			<div className="content">
				<Route path={"/profile"} render={() => <Profile/>}/>
				<Route path={"/dialog"} render={() => <DialogsContainer/>}/>
				<Route path={"/users"} render={() => <UsersContainer/>}/>
				<Route path={"/news"} render={() => <News/>}/>
				<Route path={"/music"} render={() => <Music/>}/>
				<Route path={"/settings"} render={() => <Settings/>}/>
			</div>
		</div>
	);
}

export default App;
