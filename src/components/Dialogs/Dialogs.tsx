import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// type DialogsPropsTypes = {}
export const Dialogs = () => {
	const dialogsData = [
		{id: 1, name: "Dimych"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Sveta"},
		{id: 4, name: "Sasha"},
		{id: 5, name: "Viktor"},
	]
	const messanesData = [
		{id: 1, messange: "hello"},
		{id: 2, messange: "hi"},
		{id: 3, messange: "yo"},
	]
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsData.map(el => <Dialog dialog={el}/>)}
			</div>
			<div className={s.messanges}>
				{messanesData.map(el => <Messange messange={el}/>)}
			</div>
		</div>
	);
};

type DialogType = {
	id: number
	name: string
}
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
type MessangeType = {
	id: number
	messange: string
}
type MessangePropsType = {
	messange: MessangeType
}
const Messange = (props: MessangePropsType) => {
	return (
		<div className={s.messange}>{props.messange.messange}</div>
	)
}