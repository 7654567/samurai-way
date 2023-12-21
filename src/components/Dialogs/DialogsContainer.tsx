import React from 'react';
import {addMessangeActionCreator, updateNewMessangeTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

// type DialogsPropsTypes = {
// 	state: any
// 	dispatch: Function
// }
export const DialogsContainer = (props: any) => {

	const state = props.store.getState().dialogsPage
	console.log("=>(DialogsContainer.tsx:19) state", state);

	function addMessange() {
		props.store.dispatch(addMessangeActionCreator())
	}

	function onMessangeChange(text: string) {
		props.store.dispatch(updateNewMessangeTextActionCreator(text))
	}

	return (
		<Dialogs onMessangeChange={onMessangeChange} addMessange={addMessange} state={state}/>
	);
};
