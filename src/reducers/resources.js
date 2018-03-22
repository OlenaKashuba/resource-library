const resources = (state = [
'title1'], action) => {
	switch(action.type) {
		case 'ADD_NEW_RESOURCE':
			return state.concat(action.inputValue);
		default:
			return state;
	}
};

export default resources;