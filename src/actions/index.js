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