export const ADD_MESSANGE = "ADD-MESSANGE"
export const UPDATE_NEW_MESSANGE_TEXT = "UPDATE-NEW-MESSANGE-TEXT"

const initialState = {
	newMessangeText: "new messange",
	dialogs: [
		{id: 1, name: "Dimych"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Sveta"},
		{id: 4, name: "Sasha"},
		{id: 5, name: "Viktor"},
	],
	messenges: [
		{id: 1, messange: "hello"},
		{id: 2, messange: "hi"},
		{id: 3, messange: "yo"},
	]
}
export const dialogsReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case ADD_MESSANGE: {
			const newMessange = {
				id: state.messenges.length,
				messange: state.newMessangeText
			}
			let newState = {...state, messenges: [...state.messenges, newMessange]}
			newState.newMessangeText = ""
			return newState
		}
		case UPDATE_NEW_MESSANGE_TEXT: {
			return {...state, newMessangeText: action.newText}
		}
		default:
			return state
	}
}
export const addMessangeActionCreator = () => ({type: ADD_MESSANGE})
export const updateNewMessangeTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSANGE_TEXT, newText: text})
