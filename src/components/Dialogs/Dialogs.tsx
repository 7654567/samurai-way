import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
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
	const state = props.state
	console.log("=>(Dialogs.tsx:45) props", state);

	function addMessange(e: any) {
		console.log(e)
		props.addMessange()
	}

	function onMessangeChange(e: any) {
		const text = e.target.value
		props.onMessangeChange(text)
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{props.state.dialogs.map((el: any) => <Dialog dialog={el}/>)}
				</div>
				<div className={s.messanges}>

					<form action={'#'}>
						<textarea onChange={onMessangeChange}
								  value={props.state.newMessangeText}></textarea>
						<button onClick={addMessange}>add message</button>
					</form>
					{props.state.messenges.map((el: any) => <Messange messange={el}/>)}
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