import {connect} from 'react-redux';
import Resources from '../components/Resources';
import {getRequest} from '../actions';


const getResources = state => {
	return state.inputValue.resources;
};

const mapStateToProps = state => {
	return {resources: getResources(state)};
};

const mapDispatchToProps = dispatch => ({
	getResources: () => dispatch(getRequest())
});



export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Resources);