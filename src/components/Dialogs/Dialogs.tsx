import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPageType, DialogType, MessengesType} from "../../redux/state";

type DialogsPropsTypes = {
	dialogsPage: DialogsPageType
}
export const Dialogs = (props: DialogsPropsTypes) => {
 
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{props.dialogsPage.dialogs.map(el => <Dialog dialog={el}/>)}
			</div>
			<div className={s.messanges}>
				{props.dialogsPage.messenges.map(el => <Messange messange={el}/>)}
			</div>
		</div>
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