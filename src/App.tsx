import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {RootStateType} from "./redux/state";

type AppPropsTypes = { state: RootStateType }

function App(props: AppPropsTypes) {
	return (

		<div className="App">
			<Header/>
			<Navbar menuItems={props.state.navbar.menuItems}/>
			<div className="content">
				<Route path={"/profile"} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
				<Route path={"/dialog"} render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
				<Route path={"/news"} render={() => <News/>}/>
				<Route path={"/music"} render={() => <Music/>}/>
				<Route path={"/settings"} render={() => <Settings/>}/>
			</div>
		</div>
	);
}

export default App;
