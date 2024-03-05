import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";

export class HeaderComponent extends React.Component<any, any> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render = () => {
		return <Header {...this.props} userData={this.props.userData}/>
	}
}

const mapStateToProps = (state: any) => ({
	userData: state.auth
})
// const withUrlDataProfileComponent = withRouter(HeaderComponent)
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, getAuthUserData})(HeaderComponent)



