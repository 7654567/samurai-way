import {usersAPI} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA"


const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}
export const authReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.userData,
				isAuth: true
			}
		}
		default:
			return state
	}
}
export const setAuthUserData = (userData: any) => ({
	type: SET_USER_DATA,
	userData: {id: userData.id, email: userData.email, login: userData.login}
})

export const getAuthUserData = () => {
	return (dispatch: any) => {
		usersAPI.getAuthUserData().then((response: any) => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(response.data.data))
			}
		})
	}
}