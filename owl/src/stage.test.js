import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import participants from './Store';
import renderer from 'react-test-renderer';


describe('stage', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Stage participants={participants}/>, div);
  
    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage participants={participants}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});