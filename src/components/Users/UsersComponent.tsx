import React from 'react';
// import axios from "axios";
// import s from "./Users.module.css";
import {UsersUI} from "./UsersUI";
import {Pagination} from "../Pagination/Pagination";
// import preloader from "../../assets/Spinner3.gif"
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersComponent extends React.Component<any, any> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(1, 10)

		// axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3', {
		// 	withCredentials: true,
		// 	headers: {
		// 		"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
		// 	}
		// }).then((response: any) => {
		// 	this.props.addUsers(response.data.items)
		// 	this.props.setTotalUserCount(response.data.totalCount)
		// 	this.props.toggleIsFetching(false)
		// })
	}


	setCurrentPage = (i: number) => {
		this.props.setCurrentPage(i)
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(i, this.props.pageSize).then((response: any) => {
			this.props.addUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount)
			this.props.setCurrentPage(i)
			this.props.toggleIsFetching(false)
		})
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`, {withCredentials: true}
		// 	// {
		// 	// withCredentials: true,
		// 	// headers: {
		// 	// 	"API-KEY": "3e8bd69b-bf0e-48a8-9f43-aa0fde4ef302"
		// 	// }
		// 	// }
		// ).then((response: any) => {
		// 	this.props.addUsers(response.data.items)
		// 	this.props.setTotalUserCount(response.data.totalCount)
		// 	this.props.setCurrentPage(i)
		// 	this.props.toggleIsFetching(false)
		// })
	}


	render() {


		return <>
			{
				this.props.isFetching && <Preloader/>
			}

			{/*<button onClick={this.getUsers}>Get users</button>*/}
			<Pagination totalUsersCount={this.props.totalUsersCount}
			            pageSize={this.props.pageSize}
			            currentPage={this.props.currentPage}
			            setCurrentPage={this.setCurrentPage}
			/>
			<UsersUI users={this.props.users}
			         follow={this.props.follow}
			         unfollow={this.props.unfollow}
			/>

		</>
	}
}
