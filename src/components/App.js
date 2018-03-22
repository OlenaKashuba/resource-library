import React from 'react';
import '../styles/components/App.scss';
import FormContainer from '../containers/FormContainer';
import ResourcesContainer from '../containers/ResourcesContainer';

const App = () => {
    return (
      <div>
        <FormContainer />
        <ResourcesContainer />
      </div>
    );
};

export default App;
