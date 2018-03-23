import React from 'react';
import ResourcesItem from './ResourcesItem';
import PropTypes from 'prop-types';

class Resources extends React.Component {
	constructor({resources, getResources}) {
		super({resources, getResources});
	}

	componentDidMount() {
		this.props.getResources();
	}

	render() {
		return (
			<section className='resources'>
				{this.props.resources.map ((resourcesItem,i) => {
					return <ResourcesItem
						resourcesItem={resourcesItem}
						key={i}			
					/>;
				})}
			</section>
		);
	};
};

Resources.propTypes = {
	resources: PropTypes.array,
	getResources: PropTypes.func
};

export default Resources;