import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import chatEvents from './Chatdata';
import renderer from 'react-test-renderer';


describe('Chat', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Chat chatEvents={chatEvents}/>, div);
  
    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Chat chatEvents={chatEvents}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});