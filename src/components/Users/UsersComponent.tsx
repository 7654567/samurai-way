import React from 'react';
import axios from "axios";
// import s from "./Users.module.css";
import {UsersUI} from "./UsersUI";
import {Pagination} from "../Pagination/Pagination";
import preloader from "../../assets/Spinner3.gif"

export class UsersComponent extends React.Component<any, any> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3').then((response: any) => {
			this.props.addUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount)
			this.props.toggleIsFetching(false)
		})
	}

	// constructor(props: any) {
	// 	super(props);
	// 	axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
	// 		this.props.addUsers(response.data.items)
	// 	})
	// }


	// getUsers = () => {
	// 	axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3').then((response: any) => {
	// 		this.props.addUsers(response.data.items)
	// 		this.props.setTotalUserCount(response.data.totalCount)
	// 	})
	// }

	setCurrentPage = (i: number) => {
		this.props.setCurrentPage(i)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`).then((response: any) => {
			this.props.addUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount)
			this.props.setCurrentPage(i)
			this.props.toggleIsFetching(false)
		})
	}

	render() {


		return <>
			{
				this.props.isFetching && <img src={preloader} alt="preloader"/>
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
