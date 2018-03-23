const resources = (state = [
{url: '#', title: 'title1', description: 'more'}], action) => {
	switch(action.type) {
		case 'ADD_NEW_RESOURCE':
			return state.concat(action.inputValue);
		default:
			return state;
	}
};

export default resources;