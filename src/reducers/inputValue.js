function addOrValidate(state){
	if ((state.url) && (state.title) && (state.description)) {
		return Object.assign({}, state, {
			resources: state.resources.concat(
					{url: state.url,
					title: state.title,
					description: state.description})
		});
	} else {
		return Object.assign({}, state, {
			urlError: state.url === '',
			titleError: state.title === '',
			descriptionError: state.description ===''
		});
	}
}

const inputValue = (state = {
	url: '',
	title: '',
	description: '',
	urlError: false,
	titleError: false,
	descriptionError: false,
	resources: []}, action) => {
	switch (action.type) {
		case 'RECEIVE_RESOURCES':
			return Object.assign({}, state, {
				resources: action.resources
			});
		case 'UPDATE_INPUT_VALUE':
			return Object.assign({}, state, {
				[action.name]: action.inputValue,
				name: action.name
			});
		case 'ADD_NEW_RESOURCE':
			return addOrValidate(state);
		default:
			return state;
	}
};

export default inputValue;