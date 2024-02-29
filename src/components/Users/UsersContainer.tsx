import {
	addUsers,
	follow,
	setCurrentPage,
	setTotalUserCount,
	toggleIsFetching,
	unfollow
} from "../../redux/users-reducer";
// import {Users} from "./Users";
import {connect} from "react-redux";
// import {UsersComponent} from "./UsersComponent";
import React from "react";
import axios from "axios";
import preloader from "../../assets/Spinner3.gif";
import {Pagination} from "../Pagination/Pagination";
import {UsersUI} from "./UsersUI";

const mapStateToProps = (state: any) => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching
})
// const mapDispachToProps = (dispatch: any) => ({
// 	follow: (id: any) => dispatch(follow(id)),
// 	unfollow: (id: any) => dispatch(unfollow(id)),
// 	addUsers: (users: any) => dispatch(addUsers(users)),
// 	setCurrentPage: (num: any) => dispatch(setCurrentPage(num)),
// 	setTotalUserCount: (num: any) => dispatch(setTotalUserCount(num)),
// 	toggleIsFetching: (isFetching: any) => dispatch(toggleIsFetching(isFetching))
// })

export class UsersComponent extends React.Component<any, any> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3').then((response: any) => {
			this.props.addUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount)
			this.props.toggleIsFetching(false)
		})
	}


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

export const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	addUsers,
	setCurrentPage,
	setTotalUserCount,
	toggleIsFetching
})(UsersComponent)