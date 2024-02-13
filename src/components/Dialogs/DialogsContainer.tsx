import {addMessangeActionCreator, updateNewMessangeTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


const mapsStateToProps = (state: any) => ({dialogsPage: state.dialogsPage})
const mapsDispachToProps = (dispatch: any) => ({
	addMessange: () => dispatch(addMessangeActionCreator()),
	onMessangeChange: (text: any) => dispatch(updateNewMessangeTextActionCreator(text))
})

export const DialogsContainer = connect(mapsStateToProps, mapsDispachToProps)(Dialogs)