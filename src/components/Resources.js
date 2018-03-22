import React from 'react';
import ResourcesItem from './ResourcesItem';
import PropTypes from 'prop-types';

const Resources = ({resources}) => {
	return (
		<section className='resources'>
			{resources.map ((resourcesItem,i) => {
				return <ResourcesItem
					resourcesItem={resourcesItem}
					key={i}			
				/>;
			})}
		</section>
	);
};

Resources.propTypes = {
	resources: PropTypes.array
};

export default Resources;