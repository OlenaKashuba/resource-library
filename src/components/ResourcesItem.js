import React from 'react';
import PropTypes from 'prop-types';

const ResourcesItem = ({resourcesItem}) => {
	const { title, description, url} = resourcesItem;
	return (
		<article className='resources-item'>
			<a href={url}>
				<h3>{title}</h3>
			</a>
			<p> {description} </p>
		</article>
	);
};

ResourcesItem.propTypes = {
	resourcesItem: PropTypes.object
};

export default ResourcesItem;