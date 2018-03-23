import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({name, updateValue, inputValue, error}) => {
	console.log('typeof',typeof(error));
	return(
		<fieldset>
			<label htmlFor={name}>{name}</label>
			<input
				id={name} 
				type='text'
				name={name}
				placeholder={name}
				className = {'input-'+ name}
				onChange={(event) => {event.preventDefault();
					return updateValue(event.target.value, event.target.name);}}
				value={inputValue}
			/> 
			<p className={error ? 'validation-error' : 'hidden'}> Please enter {name} </p>
		</fieldset>

	);
};

FormInput.propTypes = {
	name: PropTypes.string,
	updateValue: PropTypes.func,
	inputValue: PropTypes.string,
	error: PropTypes.boolean
};

export default FormInput;