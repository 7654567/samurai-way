import {Profile} from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {getAuthUserData} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class ProfileComponent extends React.Component<any, any> {
	componentDidMount() {
		this.props.getProfile(this.props.match?.params.userId || 2)
	}

	render = () => {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

const mapStateToProps = (state: any) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})
const AuthRedirectComponent = withAuthRedirect(ProfileComponent)
const withUrlDataProfileComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {
	getProfile,
	getAuthUserData
})(withUrlDataProfileComponent)