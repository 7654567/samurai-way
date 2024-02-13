import {addUsersAC, followAC, unfollowAC} from "../../redux/users-reducer";
import {Users} from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({state: state.usersPage})
const mapDispachToProps = (dispatch: any) => ({
	follow: (id: any) => dispatch(followAC(id)),
	unfollow: (id: any) => dispatch(unfollowAC(id)),
	addUsers: (users: any) => dispatch(addUsersAC(users))
})

export const UsersContainer = connect(mapStateToProps, mapDispachToProps)(Users)