import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";

export class HeaderComponent extends React.Component<any, any> {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response: any) => {
			if (response.data.resultCode === 0) this.props.setAuthUserData(response.data.data)
		})

	}

	render = () => {
		return <Header {...this.props} userData={this.props.userData}/>
	}
}

const mapStateToProps = (state: any) => ({
	userData: state.auth
})
// const withUrlDataProfileComponent = withRouter(HeaderComponent)
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderComponent)



