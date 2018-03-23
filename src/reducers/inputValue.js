const inputValue = (state = {
	url: '',
	title: '',
	description: ''	}, action) => {
	switch (action.type) {
		case 'UPDATE_INPUT_VALUE':
			return Object.assign({}, state, {
				[action.name]: action.inputValue,
				name: action.name
			});
		default:
			return state;
	}
};

export default inputValue;