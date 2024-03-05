import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";

import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
// import {RootStateType} from "./redux/store";

// type AppPropsTypes = {
// 	state: RootStateType
// 	dispatch: Function
// }

function App() {

	return (
		<div className="App">
			<HeaderContainer/>
			<Navbar/>
			<div className="content">
				<Route path={"/profile/:userId"} render={() => <ProfileContainer/>}/>
				<Route path={"/dialog"} render={() => <DialogsContainer/>}/>
				<Route path={"/users"} render={() => <UsersContainer/>}/>
				<Route path={"/news"} render={() => <News/>}/>
				<Route path={"/music"} render={() => <Music/>}/>
				<Route path={"/settings"} render={() => <Settings/>}/>
				<Route path={"/login"} render={() => <Login/>}/>
			</div>
		</div>
	);
}

export default App;
