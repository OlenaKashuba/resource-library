import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({name, updateValue, inputValue}) => {
	return(
		<input 
			type='text'
			name={name}
			placeholder={name}
			className = {'input-'+ name}
			onChange={event => updateValue(event.target.value)}
			value={inputValue}
		/> 
	);
};

FormInput.propTypes = {
	name: PropTypes.string,
	updateValue: PropTypes.func,
	inputValue: PropTypes.string
};

export default FormInput;