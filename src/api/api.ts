import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
	}
});


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response: any) => {
				return response.data;
			});
	},
	unfollow(userId: number) {
		return instance.delete("follow/" + userId)
	},
	follow(userId: number) {
		return instance.post("follow/" + userId)
	},
	getAuthUserData() {
		return instance.get('auth/me')
	},
	getProfile(userId: number) {
		return instance.get("profile/" + userId)
	}
}