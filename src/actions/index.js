export const addNewResource = inputValue => {
	return {type: 'ADD_NEW_RESOURCE', inputValue};
};

export const updateValue = (inputValue, name) => {
	console.log('in actions ', name);
	return {type: 'UPDATE_INPUT_VALUE',
		inputValue: inputValue,
		name: name
	};
};

function receiveResources(resources) {
	return {
		type: 'RECEIVE_RESOURCES',
		resources: resources
	};
};

function fetchResources() {
	return function(dispatch) {
	 	return fetch('/api/resources')
			.then(response => response.json(), error => console.log(error))
			.then(resources => dispatch(receiveResources(resources)));
	};
};

export const getRequest = () => {
	return(dispatch) => {
		return dispatch(fetchResources());
	};
};


