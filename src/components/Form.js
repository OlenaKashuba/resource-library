import React from 'react';
import FormInput from './FormInput';
import PropTypes from 'prop-types';

const Form = ({updateValue, inputValue, addNewResource}) => {
	return (
		<form className='form'
			onSubmit={event => {
				event.preventDefault();
				addNewResource(inputValue);
			}}
		>
			<FormInput name='url'
					updateValue={updateValue}
					inputValue={inputValue.url}/>
			<FormInput name='title'
					updateValue={updateValue}
					inputValue={inputValue.title}/>
			<FormInput name='description'
					updateValue={updateValue}
					inputValue={inputValue.description}/>
			<button className='btn-add'> Add </button>
		</form>
	);
};

Form.propTypes = {
	updateValue: PropTypes.func,
	inputValue: PropTypes.object,
	addNewResource: PropTypes.func
};

export default Form;