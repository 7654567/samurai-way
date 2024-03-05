import {addMessangeActionCreator, updateNewMessangeTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapsStateToProps = (state: any) => ({
	dialogsPage: state.dialogsPage,
	isAuth: state.auth.isAuth
})
const mapsDispachToProps = (dispatch: any) => ({
	addMessange: () => dispatch(addMessangeActionCreator()),
	onMessangeChange: (text: any) => dispatch(updateNewMessangeTextActionCreator(text))
})

const AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapsStateToProps, mapsDispachToProps)(AuthRedirectComponent)