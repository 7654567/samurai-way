import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {navbarReducer} from "./navbar-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleeware from "redux-thunk";

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	navbar: navbarReducer,
	auth: authReducer,

})
const store = createStore(reducers, applyMiddleware(thunkMiddleeware))
/* @ts-ignore */
window.store = store
// console.log("=>(redux-store.ts:10) store", store);
export default store
