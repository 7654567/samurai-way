export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const ADD_USERS = "ADD_USERS"


// const initialState = [
// 	{
// 		id: 1,
// 		name: "Serhii",
// 		followed: false,
// 		location: {
// 			city: "Leuwarden",
// 			country: "Nederlands"
// 		}
// 	},
// 	{
// 		id: 2,
// 		name: "Nik",
// 		followed: true,
// 		location: {
// 			city: "Kyiv",
// 			country: "Ukraine"
// 		}
// 	},
// 	{
// 		id: 3,
// 		name: "Ben",
// 		followed: false,
// 		location: {
// 			city: "Amsterdam",
// 			country: "Nederlands"
// 		}
// 	},
//
// ]

export const usersReducer = (state: any = [], action: any) => {
	switch (action.type) {
		case FOLLOW: {

			return state.map((u: any) => u.id === action.userId ? {...u, followed: true} : u)
		}
		case UNFOLLOW: {

			return state.map((u: any) => u.id === action.userId ? {...u, followed: false} : u)
		}
		case ADD_USERS: {

			return [...state, ...action.users]
		}
		default:
			return state
	}
}

export const followAC = (id: number) => ({type: FOLLOW, userId: id})
export const unfollowAC = (id: number) => ({type: UNFOLLOW, userId: id})
export const addUsersAC = (users: any) => ({type: ADD_USERS, users: users})
