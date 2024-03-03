import {Profile} from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

export class ProfileComponent extends React.Component<any, any> {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0//profile/' + this.props.match.params.userId).then((response: any) => {
			this.props.getProfile(response.data)
			// this.props.addUsers(response.data.items)
			// this.props.setTotalUserCount(response.data.totalCount)
			// this.props.toggleIsFetching(false)
		})

	}

	render = () => {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

const mapStateToProps = (state: any) => ({
	profile: state.profilePage.profile
})
const withUrlDataProfileComponent = withRouter(ProfileComponent)
export const ProfileContainer = connect(mapStateToProps, {getProfile})(withUrlDataProfileComponent)