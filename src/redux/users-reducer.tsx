export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const ADD_USERS = "ADD_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
export const TOGGLE_IS_FATTCHING = "TOGGLE_IS_FATTCHING"
export const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 2,
	isFetching: false,
	followingInProgress: false
}

export const usersReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: true} : u)
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: false} : u)
			}
		}
		case ADD_USERS: {
			return {
				...state,
				users: [
					// ...state.users,
					...action.users
				]

			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage

			}
		}
		case SET_TOTAL_USER_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			}
		}
		case TOGGLE_IS_FATTCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case TOGGLE_FOLLOWING_IN_PROGRESS: {
			return {
				...state,
				followingInProgress: action.followingInProgress,
			}
		}
		default:
			return state
	}
}

export const follow = (id: number) => ({type: FOLLOW, userId: id})
export const unfollow = (id: number) => ({type: UNFOLLOW, userId: id})
export const addUsers = (users: any) => ({type: ADD_USERS, users: users})
export const setCurrentPage = (currentPage: any) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUserCount = (totalUsersCount: any) => ({
	type: SET_TOTAL_USER_COUNT,
	totalUsersCount: totalUsersCount
})
export const toggleIsFetching = (isFetching: any) => ({type: TOGGLE_IS_FATTCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress: any) => ({
	type: TOGGLE_FOLLOWING_IN_PROGRESS,
	followingInProgress
})
