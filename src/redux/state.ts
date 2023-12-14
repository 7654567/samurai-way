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

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
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
	addPost() {
		const newPost: PostType = {
			id: this._state.profilePage.posts.length,
			text: this._state.profilePage.newPostText,
			avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ""
		console.log("=>(state.ts:94) state.profilePage.posts", this._state.profilePage.posts);
		this._callSubscriber()
	},
	updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText
		console.log("=>(state.ts:102) state.profilePage.newPostText", this._state.profilePage.newPostText);
		this._callSubscriber()
	},
	subscribe(observer: any) {
		this._callSubscriber = observer
	},
	dispatch(action: any) {
		console.log("=>(state.ts:118) ß", this);
		if (action.type === "ADD-POST") this.addPost()
		if (action.type === "UPDATE-NEW-POST-TEXT") this.updateNewPostText(action.newText)
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


