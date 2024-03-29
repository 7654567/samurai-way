import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export type PostType = {
	id: number
	text: string
	avaUrl: string
}
export type ProfilePageType = {
	posts: Array<PostType>
	newPostText: string
}
export type MessengesType = {
	id: number
	messange: string
}
export type DialogType = {
	id: number
	name: string
}
export type DialogsPageType = {
	newMessangeText: string
	dialogs: Array<DialogType>
	messenges: Array<MessengesType>
}
export type MenuItemType = {
	text: string
	url: string
}
export type NavbarType = {
	menuItems: Array<MenuItemType>
}
export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	navbar: NavbarType
}


export const store = {
	_state: {
		profilePage: {
			newPostText: "new post!!",
			posts: [
				{
					id: 1,
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore labore nemo qui repellat repellendus sequi sint. Architecto fugiat qui totam!",
					avaUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg"
				},
				{
					id: 2,
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eveniet fuga nemo quo unde! Beatae deleniti dolor eaque natus nihil?",
					avaUrl: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
				},
				{
					id: 3,
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate distinctio doloribus iusto molestias pariatur praesentium, quia quod sed similique!",
					avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJaDn7Vmy8w0uaXt5Zma1tWcPZfXpvSA8Kd8B-qILghPJLnrEFnshHFmsZqv3mjIrYVw&usqp=CAU"
				},
				{
					id: 4,
					text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consectetur magni nam nobis odit placeat quos. Commodi, est, officiis.",
					avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
				},

			]
		},
		dialogsPage: {
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
		},
		navbar: {
			menuItems: [
				{text: "Profiles", url: "/profile"},
				{text: "Messanges", url: "/dialog"},
				{text: "News", url: "/news"},
				{text: "Music", url: "/music"},
				{text: "Settings", url: "settings"},
			]
		}
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log("rerender")
	},
	subscribe(observer: any) {
		this._callSubscriber = observer
	},
	dispatch(action: any) {
		// if (action.type === ADD_POST) this.addPost()
		// if (action.type === UPDATE_NEW_POST_TEXT) this.updateNewPostText(action.newText)
		// if (action.type === ADD_MESSANGE) this.addMessage()
		// if (action.type === UPDATE_NEW_MESSANGE_TEXT) this.updateNewMessageText(action.newText)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)

		this._callSubscriber()
	}
}



