import React from 'react';
import {addMessangeActionCreator, updateNewMessangeTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// type DialogsPropsTypes = {
// 	state: any
// 	dispatch: Function
// }

// export const DialogsContainer = (props: any) => {
//
// 	// const state = props.store.getState().dialogsPage
// 	//
// 	// function addMessange() {
// 	// 	props.store.dispatch(addMessangeActionCreator())
// 	// }
// 	//
// 	// function onMessangeChange(text: string) {
// 	// 	props.store.dispatch(updateNewMessangeTextActionCreator(text))
// 	// }
//
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					debugger
// 					console.log("=>(DialogsContainer.tsx:45) store", store);
// 					const state = store.getState().dialogsPage
//
// 					function addMessange() {
// 						store.dispatch(addMessangeActionCreator())
// 					}
//
// 					function onMessangeChange(text: string) {
// 						store.dispatch(updateNewMessangeTextActionCreator(text))
// 					}
//
// 					return <Dialogs onMessangeChange={onMessangeChange} addMessange={addMessange} state={state}/>
// 				}
// 			}
//
// 		</StoreContext.Consumer>
// 	);
// };
const mapsStateToProps = (state: any) => ({dialogsPage: state.dialogsPage})
const mapsDispachToProps = (dispatch: any) => ({
	addMessange: () => dispatch(addMessangeActionCreator()),
	onMessangeChange: (text: any) => dispatch(updateNewMessangeTextActionCreator(text))
})

export const DialogsContainer = connect(mapsStateToProps, mapsDispachToProps)(Dialogs)