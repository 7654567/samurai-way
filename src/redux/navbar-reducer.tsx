export const ADD_MESSANGE = "ADD-MESSANGE"
export const UPDATE_NEW_MESSANGE_TEXT = "UPDATE-NEW-MESSANGE-TEXT"

const initialState = {
	menuItems: [
		{text: "Profiles", url: "/profile"},
		{text: "Messanges", url: "/dialog"},
		{text: "News", url: "/news"},
		{text: "Music", url: "/music"},
		{text: "Settings", url: "settings"},
	]
}
export const navbarReducer = (state: any = initialState, action: any) => {
	return state
	switch (action.type) {
		case ADD_MESSANGE:
			const newMessange = {
				id: state.messenges.length,
				messange: state.newMessangeText
			}
			state.messenges.push(newMessange)
			state.newMessangeText = ""
			return state
		case UPDATE_NEW_MESSANGE_TEXT:
			state.newMessangeText = action.newText
			return state
		default:
			return state
	}
}
export const addMessangeActionCreator = () => ({type: ADD_MESSANGE})
export const updateNewMessangeTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSANGE_TEXT, newText: text})