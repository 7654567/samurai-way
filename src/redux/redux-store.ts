import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navbar: navbarReducer
})
const store = createStore(reducers)
console.log("=>(redux-store.ts:10) store", store);
export default store
