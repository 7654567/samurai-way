export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
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
}

export const profileReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: state.posts.length,
				text: state.newPostText,
				avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
			}
			state.newPostText = ""
			return {...state, posts: [...state.posts, newPost]}
		}
		case UPDATE_NEW_POST_TEXT: {
			let newState = {...state}
			newState.newPostText = action.newText
			return newState
		}
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})