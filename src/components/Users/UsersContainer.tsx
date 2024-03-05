import {
	getUsers,
	setCurrentPage,
	setTotalUserCount,
	follow,
	unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Pagination} from "../Pagination/Pagination";
import {UsersUI} from "./UsersUI";
import {Preloader} from "../Preloader/Preloader";

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
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}


	setCurrentPage = (pageNumber: number) => this.props.getUsers(pageNumber, this.props.pageSize)

	render() {

		return <>
			{this.props.isFetching && <Preloader/>}

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
	setCurrentPage,
	setTotalUserCount,
	getUsers
})(UsersComponent)