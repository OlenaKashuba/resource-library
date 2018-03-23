import {connect} from 'react-redux';
import Form from '../components/Form';
import {updateValue, addNewResource} from '../actions';

const getInputValue = state => {
	return state.inputValue;
};

const mapStateToProps = state => {
	console.log(state);
	return {inputValue: getInputValue(state)};
};

const mapDispatchToProps = dispatch => ({
	updateValue: (inputValue, name) => dispatch(updateValue(inputValue, name)),
	addNewResource: inputValue => dispatch(addNewResource(inputValue))
});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Form);