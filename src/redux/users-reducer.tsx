import {usersAPI} from "../api/api";

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
			console.log("=>(users-reducer.tsx:75) action", action);
			return {
				...state,
				users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: true} : u)
			}
		}
		case UNFOLLOW: {
			console.log("=>(users-reducer.tsx:75) action", action);
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


export const followSucsess = (id: number) => ({type: FOLLOW, userId: id})
export const unfollowSucsess = (id: number) => ({type: UNFOLLOW, userId: id})
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

export const getUsers = (curentPage: number, pageSize: number) => {
	return (dispatch: any) => {
		dispatch(setCurrentPage(curentPage))
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(curentPage, pageSize).then((response: any) => {
			dispatch(addUsers(response.items))
			dispatch(setTotalUserCount(response.totalCount))
			dispatch(setCurrentPage(curentPage))
			dispatch(toggleIsFetching(false))
		})
	}
}
export const follow = (userId: number) => {
	return (dispatch: any) => {
		dispatch(toggleFollowingInProgress(userId))
		usersAPI.follow(userId).then(response => {
			console.log("=>(users-reducer.tsx:120) response", response);
			dispatch(toggleFollowingInProgress(null))
			if (response.data.resultCode === 0) dispatch(followSucsess(userId))
		})
	}
}
export const unfollow = (userId: number) => {
	return (dispatch: any) => {
		dispatch(toggleFollowingInProgress(userId))
		usersAPI.unfollow(userId).then(response => {
			console.log("=>(users-reducer.tsx:120) response", response);
			dispatch(toggleFollowingInProgress(null))
			if (response.data.resultCode === 0) dispatch(unfollowSucsess(userId))
		})
	}
}


