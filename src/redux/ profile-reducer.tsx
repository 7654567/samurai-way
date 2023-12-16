export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state: any, action: any) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: state.posts.length,
				text: state.newPostText,
				avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPGqX4s6HDBoVTLwIhy3fFmdxvMiDIfUtdA&usqp=CAU"
			}
			state.posts.push(newPost)
			state.newPostText = ""
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state

	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})