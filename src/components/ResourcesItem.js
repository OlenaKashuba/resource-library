import React from 'react';
import PropTypes from 'prop-types';

const ResourcesItem = ({resourcesItem}) => {
	return (
		<article className='resources-item'>
			<a href='#'>
				<h3>{resourcesItem}</h3>
			</a>
			<p> description </p>
		</article>
	);
};

ResourcesItem.propTypes = {
	resourcesItem: PropTypes.string
};

export default ResourcesItem;