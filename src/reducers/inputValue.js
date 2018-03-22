const inputValue = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_INPUT_VALUE':
			return action.inputValue;
		default:
			return state;
	}
};

export default inputValue;