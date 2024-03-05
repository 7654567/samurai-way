import React from 'react';
import s from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {
	// DialogsPageType,
	DialogType,
	MessengesType
} from "../../redux/store";

// type DialogsPropsTypes = {
// 	state: any
// 	dispatch: Function
// }
export const Dialogs = (props: any) => {
	const state = props.dialogsPage


	function addMessange(e: any) {
		props.addMessange()
	}

	function onMessangeChange(e: any) {
		const text = e.target.value
		props.onMessangeChange(text)
	}

	// if (!props.isAuth) return <Redirect to={"/login"}/>

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{state.dialogs.map((el: any, index: number) => <Dialog dialog={el} key={index}/>)}
				</div>
				<div className={s.messanges}>

					<form action={'#'}>
						<textarea onChange={onMessangeChange}
						          value={state.newMessangeText}></textarea>
						<button onClick={addMessange}>add message</button>
					</form>
					{state.messenges.map((el: any, index: number) => <Messange messange={el} key={index}/>)}
				</div>
			</div>
		</>
	);
};
type DialogPropsType = {
	dialog: DialogType
}
const Dialog = (props: DialogPropsType) => {

	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink>
		</div>
	)
}

type MessangePropsType = {
	messange: MessengesType
}
const Messange = (props: MessangePropsType) => {
	return (
		<div className={s.messange}>{props.messange.messange}</div>
	)
}