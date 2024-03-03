import {
	addUsers,
	follow,
	setCurrentPage,
	setTotalUserCount, toggleFollowingInProgress,
	toggleIsFetching,
	unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import preloader from "../../assets/Spinner3.gif";
import {Pagination} from "../Pagination/Pagination";
import {UsersUI} from "./UsersUI";
import {usersAPI} from "../../api/api";

const mapStateToProps = (state: any) => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress
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
		usersAPI.getUsers(2, 3).then((response: any) => {
			this.props.addUsers(response.items)
			this.props.setTotalUserCount(response.totalCount)
			this.props.toggleIsFetching(false)
		})
	}


	setCurrentPage = (i: number) => {
		this.props.setCurrentPage(i)
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(i, this.props.pageSize).then((response: any) => {
			this.props.addUsers(response.items)
			this.props.setTotalUserCount(response.totalCount)
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
			         followingInProgress={this.props.followingInProgress}
			         toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
	toggleIsFetching,
	toggleFollowingInProgress
})(UsersComponent)