import {connect} from 'react-redux';
import Resources from '../components/Resources';

const getResources = state => {
	return state.resources;
};

const mapStateToProps = state => {
	return {resources: getResources(state)};
};



export default connect (
	mapStateToProps
	// mapDispatchToProps
)(Resources);